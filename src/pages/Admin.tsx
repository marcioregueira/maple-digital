import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useProjects, resolveImageUrl, type ProjectRow } from "@/hooks/useProjects";
import ProjectForm from "@/components/admin/ProjectForm";
import { Pencil, Trash2, Plus, LogOut, ArrowLeft } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const { session, isAdmin, loading } = useAdminAuth();
  const { data: projects, refetch } = useProjects();
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<ProjectRow | null>(null);

  useEffect(() => {
    if (!loading && !session) navigate("/admin/login");
  }, [session, loading, navigate]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  if (!session) return null;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4 text-center">
        <h1 className="text-2xl font-bold">Acesso negado</h1>
        <p className="text-muted-foreground max-w-md">
          Sua conta ({session.user.email}) está autenticada, mas não tem permissão de administrador.
          Entre em contato com o responsável para conceder acesso.
        </p>
        <Button variant="outline" onClick={async () => { await supabase.auth.signOut(); navigate("/admin/login"); }}>
          Sair
        </Button>
      </div>
    );
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este projeto?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    else { toast({ title: "Projeto excluído" }); refetch(); }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" /> Voltar ao site
            </Link>
            <h1 className="text-xl font-bold">Painel Admin</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={async () => { await supabase.auth.signOut(); navigate("/admin/login"); }}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Projetos</h2>
          <Button onClick={() => { setEditing(null); setFormOpen(true); }}>
            <Plus className="w-4 h-4 mr-2" /> Novo Projeto
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects?.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <div className="h-40 overflow-hidden bg-muted">
                <img src={resolveImageUrl(p.image_path)} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold">{p.name}</h3>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {p.category === "landing" ? "Landing" : "Institucional"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => { setEditing(p); setFormOpen(true); }}>
                    <Pencil className="w-3 h-3 mr-1" /> Editar
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(p.id)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <ProjectForm open={formOpen} onOpenChange={setFormOpen} project={editing} onSaved={refetch} />
    </div>
  );
};

export default Admin;
