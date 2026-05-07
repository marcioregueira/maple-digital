import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import type { ProjectRow, ProjectCategory } from "@/hooks/useProjects";
import { resolveImageUrl } from "@/hooks/useProjects";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectRow | null;
  onSaved: () => void;
}

const ProjectForm = ({ open, onOpenChange, project, onSaved }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState<ProjectCategory>("landing");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentImagePath, setCurrentImagePath] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description);
      setUrl(project.url);
      setCategory(project.category);
      setCurrentImagePath(project.image_path);
    } else {
      setName(""); setDescription(""); setUrl(""); setCategory("landing"); setCurrentImagePath("");
    }
    setImageFile(null);
  }, [project, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let image_path = currentImagePath;
      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const filename = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage.from("project-images").upload(filename, imageFile);
        if (upErr) throw upErr;
        image_path = filename;
      }
      if (!image_path) {
        toast({ title: "Imagem obrigatória", variant: "destructive" });
        setSaving(false);
        return;
      }

      if (project) {
        const { error } = await supabase
          .from("projects")
          .update({ name, description, url, category, image_path })
          .eq("id", project.id);
        if (error) throw error;
        toast({ title: "Projeto atualizado" });
      } else {
        const { error } = await supabase
          .from("projects")
          .insert({ name, description, url, category, image_path, display_order: 999 });
        if (error) throw error;
        toast({ title: "Projeto criado" });
      }
      onSaved();
      onOpenChange(false);
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Editar projeto" : "Novo projeto"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nome do site</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
          </div>
          <div>
            <Label>Descrição</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required maxLength={500} rows={4} />
          </div>
          <div>
            <Label>URL do site</Label>
            <Input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
          </div>
          <div>
            <Label>Categoria</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as ProjectCategory)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="landing">Landing Page</SelectItem>
                <SelectItem value="institutional">Site Institucional</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Imagem</Label>
            <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
            {currentImagePath && !imageFile && (
              <img src={resolveImageUrl(currentImagePath)} alt="atual" className="mt-2 h-32 object-cover rounded" />
            )}
          </div>
          <Button type="submit" disabled={saving} className="w-full">
            {saving ? "Salvando..." : "Salvar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;
