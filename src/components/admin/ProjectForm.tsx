import { useState, useEffect, useRef } from "react";
import { Upload, ImageIcon, X } from "lucide-react";
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
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [currentImagePath, setCurrentImagePath] = useState("");
  const [saving, setSaving] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setPreviewUrl("");
  }, [project, open]);

  useEffect(() => {
    if (!imageFile) { setPreviewUrl(""); return; }
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleFileSelect = (file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Arquivo inválido", description: "Selecione uma imagem", variant: "destructive" });
      return;
    }
    setImageFile(file);
  };

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
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                handleFileSelect(e.dataTransfer.files?.[0] ?? null);
              }}
              className={`mt-1 relative cursor-pointer rounded-lg border-2 border-dashed transition-all duration-300 overflow-hidden group ${
                dragActive
                  ? "border-primary bg-primary/10 scale-[1.02]"
                  : "border-border hover:border-primary/60 hover:bg-primary/5"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files?.[0] ?? null)}
              />
              {previewUrl || currentImagePath ? (
                <div className="relative">
                  <img
                    src={previewUrl || resolveImageUrl(currentImagePath)}
                    alt="preview"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                    <span className="text-xs text-white flex items-center gap-1">
                      <Upload className="w-3 h-3" /> Trocar imagem
                    </span>
                    {imageFile && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setImageFile(null); }}
                        className="p-1 rounded-full bg-destructive text-destructive-foreground hover:scale-110 transition-transform"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Clique ou arraste uma imagem</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG ou WEBP</p>
                </div>
              )}
            </div>
            {imageFile && (
              <p className="text-xs text-muted-foreground mt-2 truncate">📎 {imageFile.name}</p>
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
