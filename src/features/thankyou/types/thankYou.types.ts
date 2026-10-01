export interface SessionSummaryItem {
  label: string;
  value: string;
}

export interface ThankYouContent {
  statusText: string;
  welcome: {
    title: string;
    subtitle: string;
  };
  actionNotice: string;
  whatsappCard: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
  };
  testCard: {
    badge: string;
    ribbon: string;
    title: string;
    description: string;
    buttonText: string;
  };
  summary: {
    title: string;
    tag: string;
    items: SessionSummaryItem[];
  };
  supportText: string;
  popup: {
    title: string;
    text: string;
    buttonText: string;
    dismissText: string;
  };
}
