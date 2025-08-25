export interface IModalAdmin {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
}
