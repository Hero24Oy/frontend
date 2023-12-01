export type ExpertiseStore = {
  categoriesNames: string[];
  expertiseCategories: Record<string, string[]>;
};

export type ExpertiseData = Record<string, { items: string[]; title: string }>;
