export interface HeaderProps {
  disabled?: boolean;
  onAdd: (description: string) => Promise<void>;
}
