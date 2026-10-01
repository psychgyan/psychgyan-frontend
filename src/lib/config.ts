export const siteConfig = {
  paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_URL || "/thankyou",
  whatsappCommunityUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL ||
    "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK",
  psychometricTestUrl:
    process.env.NEXT_PUBLIC_PSYCHOMETRIC_TEST_URL ||
    "https://your-psychometric-test-link.com",
};
