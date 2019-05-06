export interface NavigationConfig {
  links: Link[];
}

export interface Link {
  value: string;
  name: string;
  icon?: string;
}
