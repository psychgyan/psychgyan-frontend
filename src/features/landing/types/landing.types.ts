export interface LearnItem {
  id: number;
  title: string;
  description: string;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
}

export interface LandingContent {
  headline: {
    main: string;
    highlight: string;
  };
  audience: string;
  truth: {
    highlight: string;
    text: string;
  };
  ticket: {
    title: string;
    duration: string;
    price: string;
    originalPrice?: string;
  };
  learnings: LearnItem[];
  bonus: {
    title: string;
    value: string;
    items: BonusItem[];
  };
  cta: {
    buttonText: string;
    subtitle: string;
  };
}
