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
    subtitle: "Send a little love this Eid 🌙",
    active: true,
    templates: [
      {
        id: "bloom",
        name: "In Bloom",
        image: "/templates/eid/bloom.jpg",
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
        id: "lanterns",
        name: "Lanterns",
        image: "/templates/eid/lanterns.jpg",
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
        id: "crescent",
        name: "Crescent",
        image: "/templates/eid/crescent.jpg",
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