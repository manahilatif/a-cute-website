export type TextFieldType = "short" | "long";

export interface TextField {
  id: string;
  label: string;
  placeholder: string;
  type: TextFieldType;
  maxLength: number;
}

export interface Template {
  id: string;
  name: string;
  image: string;
  fields: TextField[];
}

export interface Occasion {
  id: string;
  label: string;
  subtitle: string;
  active: boolean;
  templates: Template[];
}

export const occasions: Occasion[] = [
  {
    id: "eid",
    label: "Eid Mubarak",
    subtitle: "because some feelings deserve more than a text 💌",
    active: true,
    templates: [
      {
        id: "book",
        name: "Flowers and Books",
        image: "/templates/eid/book.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "chand",
        name: "Eid Ka Chand",
        image: "/templates/eid/chand.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "cherry",
        name: "Cherries",
        image: "/templates/eid/cherry.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "chooriyan",
        name: "Akhbar Aur Chooriyan",
        image: "/templates/eid/chooriyan.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "eid",
        name: "Eid Ki Baaten",
        image: "/templates/eid/eid.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "eid2",
        name: "Eid Aesthetic",
        image: "/templates/eid/eid2.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "florals",
        name: "Floral Pattern",
        image: "/templates/eid/florals.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "hotballoon",
        name: "Hot Air Balloon",
        image: "/templates/eid/hotballoon.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "lemons",
        name: "Lemons",
        image: "/templates/eid/lemons.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "ludo",
        name: "Phool Wala Ludo",
        image: "/templates/eid/ludo.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "mughal",
        name: "Mughal Designs",
        image: "/templates/eid/mughal.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "pattern",
        name: "Diamonds and Patterns",
        image: "/templates/eid/pattern.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "phool",
        name: "Truck Art Phool",
        image: "/templates/eid/phool.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "pinkGogh",
        name: "Starry Night but Make it Pink",
        image: "/templates/eid/pinkGogh.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "qila",
        name: "Badshahi Qila Aur Eid",
        image: "/templates/eid/qila.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "stamp",
        name: "Flower Stamp",
        image: "/templates/eid/stamp.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "toast",
        name: "Aesthetic Toast",
        image: "/templates/eid/toast.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
      {
        id: "vase",
        name: "Card Design Vase",
        image: "/templates/eid/vase.jpg",
        fields: [
          {
            id: "to",
            label: "To",
            placeholder: "Who is this for?",
            type: "short",
            maxLength: 40,
          },
          {
            id: "message",
            label: "Your message",
            placeholder: "Write something sweet...",
            type: "long",
            maxLength: 280,
          },
          {
            id: "from",
            label: "From",
            placeholder: "Your name",
            type: "short",
            maxLength: 40,
          },
        ],
      },
    ],
  },
  // ── Add a new occasion below when ready ──────────────────────────
  // {
  //   id: "diwali",
  //   label: "Happy Diwali",
  //   subtitle: "Spread the light this Diwali ✨",
  //   active: false,
  //   templates: [...],
  // },
];

// Helper: get a single occasion by id
export function getOccasion(id: string): Occasion | undefined {
  return occasions.find((o) => o.id === id && o.active);
}

// Helper: get a single template by occasion + template id
export function getTemplate(
  occasionId: string,
  templateId: string
): Template | undefined {
  return getOccasion(occasionId)?.templates.find((t) => t.id === templateId);
}