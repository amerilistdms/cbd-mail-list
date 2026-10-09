export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "how-cbd-consumer-data-gets-compiled",
    category: "CBD Audience Data",
    title: "How CBD Consumer Data Gets Compiled",
    image: "/images/crystalweed-cannabis-YQoRXkEtA4Q-unsplash.jpg",
    excerpt:
      "If you're buying a CBD email list, the first question worth asking is where the records came from. In a category that sits between supplements, wellness, and hemp agriculture, the answer matters more than most providers admit.",
    content: [
      {
        type: "heading",
        text: "Where CBD Audience Data Comes From",
      },
      {
        type: "paragraph",
        text: "If you're buying a CBD email list, the first question worth asking is where the records came from. Most providers answer it vaguely, and in the CBD category the answer shapes everything from response rates to deliverability.",
      },
      {
        type: "paragraph",
        text: "Hemp-derived CBD is legal at the federal level, but the category is still treated cautiously by ad platforms, payment processors, and inbox filters. That makes the quality of your owned audience data far more important than it would be for a typical consumer product.",
      },
      {
        type: "paragraph",
        text: "Here is how CBD consumer data actually gets compiled, source by source, and what each one is worth.",
      },
      {
        type: "heading",
        text: "Purchase and Transaction Data",
      },
      {
        type: "paragraph",
        text: "The strongest signal of CBD interest is a past purchase. Catalog buyers, ecommerce customers, and subscription members who have bought CBD oils, gummies, topicals, or pet products have already shown intent with their wallets.",
      },
      {
        type: "lead",
        text: "Transaction-based CBD segments typically break down by:",
      },
      {
        type: "list",
        items: [
          "Product type: tinctures, edibles, topicals, capsules, pet CBD",
          "Purchase recency and frequency",
          "Average order value",
          "Channel: online, catalog, wellness retail",
          "Subscription or one-time buyer",
        ],
      },
      {
        type: "image",
        src: "/images/cbd-infos-uQEr4uWxvJc-unsplash.jpg",
        alt: "Open jar of CBD balm resting on a leaf",
      },
      {
        type: "heading",
        text: "Surveys and Self-Reported Interest",
      },
      {
        type: "paragraph",
        text: "Lifestyle surveys and opt-in questionnaires ask consumers directly about the products they use and the wellness goals they care about: sleep, stress, recovery, joint comfort, and skincare. Self-reported data is valuable because it captures interest before a first purchase happens.",
      },
      {
        type: "callout",
        text: "A consumer who tells you they're actively looking for natural sleep support is often a better prospect than one who bought a single sample two years ago.",
      },
      {
        type: "heading",
        text: "Modeled and Lookalike Audiences",
      },
      {
        type: "paragraph",
        text: "Modeling takes known CBD buyers and finds consumers who share their demographic, behavioral, and lifestyle characteristics. Done well, it extends your reach into people who look and act like your best customers. Done poorly, it fills a file with loosely related wellness shoppers.",
      },
      {
        type: "paragraph",
        text: "When someone offers you a modeled CBD file, ask what the seed audience was and how the model was validated against actual response.",
      },
      {
        type: "heading",
        text: "Hygiene Before Delivery",
      },
      {
        type: "list",
        items: [
          "Deduplication across sources so one household isn't mailed three times",
          "Email verification to remove invalid and risky addresses",
          "NCOA processing for postal accuracy",
          "Suppression of opt-outs and do-not-contact records",
          "Age filtering to keep campaigns adult-only",
        ],
      },
      {
        type: "heading",
        text: "Questions to Ask Before You Buy",
      },
      {
        type: "list",
        items: [
          "How was CBD interest determined: purchase, survey, or model?",
          "How recently were the records sourced and verified?",
          "Is the email data permission based?",
          "Can counts be selected by product type, geography, and demographics?",
        ],
      },
      {
        type: "paragraph",
        text: "Whether you're looking for CBD consumer email lists, hemp buyer mailing lists, wellness audiences, or custom audience targeting solutions, our team is here to help. Contact AmeriList today!",
      },
    ],
  },
  {
    slug: "email-marketing-tips-for-cbd-brands",
    category: "Email Marketing",
    title: "Email Marketing Tips for CBD Brands",
    image: "/images/crystalweed-cannabis-j_9If4895a4-unsplash.jpg",
    excerpt:
      "Email is the channel CBD brands control most directly. With paid social and search restricted, a well-built list and a disciplined sending program can become your most reliable source of revenue.",
    content: [
      {
        type: "heading",
        text: "Why Email Matters More for CBD",
      },
      {
        type: "paragraph",
        text: "Many CBD brands find that paid social and search ads are limited or rejected outright. That makes owned channels, especially email, the backbone of customer acquisition and retention for the category.",
      },
      {
        type: "paragraph",
        text: "The upside is significant. Wellness buyers tend to reorder, respond to education, and stay loyal to brands they trust. The challenge is that CBD senders start with less margin for error on deliverability.",
      },
      {
        type: "heading",
        text: "Start With Permission Based Data",
      },
      {
        type: "paragraph",
        text: "Every successful CBD email program starts with consumers who agreed to receive offers. Permission based lists produce better engagement, fewer complaints, and a healthier sender reputation than scraped or recycled files.",
      },
      {
        type: "image",
        src: "/images/slumber-sleep-aid-eiQvo7zFaSQ-unsplash.jpg",
        alt: "Person holding a bottle of sleep gummies",
      },
      {
        type: "heading",
        text: "Lead With Education, Not Hype",
      },
      {
        type: "paragraph",
        text: "CBD buyers want to understand what they're purchasing. Content about sourcing, third-party lab testing, dosage formats, and how to choose between full spectrum, broad spectrum, and isolate builds trust and keeps messages out of the spam folder.",
      },
      {
        type: "callout",
        text: "Avoid medical claims. Focus on quality, transparency, and how your products fit into a customer's daily routine.",
      },
      {
        type: "heading",
        text: "Segment by Product and Need",
      },
      {
        type: "lead",
        text: "Practical segments for CBD email programs include:",
      },
      {
        type: "list",
        items: [
          "First-time buyers vs. repeat customers",
          "Tincture, gummy, topical, and pet product buyers",
          "Wellness goals such as sleep, recovery, or relaxation",
          "Subscription members and lapsed subscribers",
          "Geography, to respect state-specific rules",
        ],
      },
      {
        type: "heading",
        text: "Protect Your Deliverability",
      },
      {
        type: "list",
        items: [
          "Authenticate your domain with SPF, DKIM, and DMARC",
          "Warm up new sending domains gradually",
          "Verify addresses before every major send",
          "Remove inactive subscribers on a regular schedule",
          "Make unsubscribing easy and honor requests quickly",
        ],
      },
      {
        type: "paragraph",
        text: "Need qualified CBD buyers to grow your list? AmeriList can provide free counts for opt-in CBD and wellness audiences in your target market.",
      },
    ],
  },
  {
    slug: "reaching-wellness-consumers-with-direct-mail",
    category: "Direct Mail",
    title: "Reaching Wellness Consumers With Direct Mail",
    image: "/images/crystalweed-cannabis-_gtictneYMg-unsplash.jpg",
    excerpt:
      "Direct mail is one of the few channels where CBD brands can tell their full story without platform restrictions. Paired with accurate audience data, it turns curious wellness shoppers into loyal customers.",
    content: [
      {
        type: "heading",
        text: "Why Direct Mail Works for CBD",
      },
      {
        type: "paragraph",
        text: "A printed piece lands in a consumer's hands without an algorithm deciding whether it can be seen. For CBD and hemp brands that face ad restrictions online, that makes direct mail a dependable acquisition channel.",
      },
      {
        type: "paragraph",
        text: "Mail also gives you room to educate. A catalog or postcard can explain sourcing, testing, and product formats in a way a short digital ad never could.",
      },
      {
        type: "heading",
        text: "Choose the Right Audience",
      },
      {
        type: "lead",
        text: "High-performing wellness mail audiences often include:",
      },
      {
        type: "list",
        items: [
          "Known CBD and hemp product buyers",
          "Natural supplement and vitamin purchasers",
          "Yoga, fitness, and active lifestyle households",
          "Pet owners who buy premium and natural pet products",
          "Clean beauty and skincare shoppers",
        ],
      },
      {
        type: "image",
        src: "/images/elsa-olofsson-WHd2oBDoI9M-unsplash.jpg",
        alt: "CBD tinctures, lotion, and gummies arranged on a table",
      },
      {
        type: "heading",
        text: "Build an Offer That Gets a Response",
      },
      {
        type: "paragraph",
        text: "First-time CBD buyers respond to low-risk ways to try a product: sample sizes, introductory discounts, bundles, or a satisfaction guarantee. Make the offer clear, give it a deadline, and use a unique code or URL so every response can be tracked.",
      },
      {
        type: "callout",
        text: "The best mail pieces pair a simple offer with a QR code that takes the reader straight to a dedicated landing page.",
      },
      {
        type: "heading",
        text: "Combine Mail With Digital",
      },
      {
        type: "paragraph",
        text: "Direct mail performs best as part of a multichannel program. Matching your mail file to email and digital audiences lets you reinforce the same message across channels and follow up with responders quickly.",
      },
      {
        type: "heading",
        text: "Measure and Refine",
      },
      {
        type: "list",
        items: [
          "Track response rate and cost per acquisition by segment",
          "Test one variable at a time: list, offer, or creative",
          "Profile responders to build better lookalike audiences",
          "Re-mail top-performing segments on a regular cadence",
        ],
      },
      {
        type: "paragraph",
        text: "Ready to reach more wellness consumers by mail? Request a free market analysis and see how many CBD buyers are available in your area.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
