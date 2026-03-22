import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ReceiverEmailProps {
  cardUrl: string;
  occasionLabel: string;
  templateImage: string;
  fields: Record<string, string>;
  expiryDate: string;
  senderEmail: string;
}

export function ReceiverEmail({
  cardUrl,
  occasionLabel,
  templateImage,
  fields,
  expiryDate,
  senderEmail,
}: ReceiverEmailProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  return (
    <Html>
      <Head />
      <Preview>
        You've received a {occasionLabel} card — open it to see your message ♡
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Header */}
          <Section style={styles.header}>
            <Text style={styles.headerLabel}>a cute website</Text>
          </Section>

          {/* Card preview image */}
          <Section style={styles.imageSection}>
            <Img
              src={`${baseUrl}${templateImage}`}
              alt={occasionLabel}
              width="100%"
              style={styles.cardImage}
            />
          </Section>

          {/* Message */}
          <Section style={styles.content}>
            <Heading style={styles.heading}>
              You've got a {occasionLabel} card! 🌙
            </Heading>

            {fields.from && (
              <Text style={styles.subtext}>
                A little something from{" "}
                <span style={styles.highlight}>{fields.from}</span> is waiting
                for you.
              </Text>
            )}

            <Text style={styles.body2}>
              Click the card below to open it and read your message ♡
            </Text>

            {/* CTA Button */}
            <Section style={styles.buttonSection}>
              <Button href={cardUrl} style={styles.button}>
                Open my card
              </Button>
            </Section>

            {/* Expiry notice */}
            <Section style={styles.expiryBox}>
              <Text style={styles.expiryText}>
                🌸 This card will float away on{" "}
                <strong>{expiryDate}</strong> — open it and download it to
                keep it forever.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              sent with love via a cute website ♡
            </Text>
            <Text style={styles.footerSmall}>
              You received this because {senderEmail} sent you a card.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#fffaf5",
    fontFamily: "'DM Sans', Georgia, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    overflow: "hidden",
    marginTop: "32px",
    marginBottom: "32px",
  },
  header: {
    backgroundColor: "#fff0f3",
    padding: "20px 32px",
    textAlign: "center",
  },
  headerLabel: {
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#e8637a",
    margin: 0,
  },
  imageSection: {
    width: "100%",
  },
  cardImage: {
    width: "100%",
    display: "block",
    maxHeight: "280px",
    objectFit: "cover",
  },
  content: {
    padding: "32px 32px 24px",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "400",
    color: "#3d2a2a",
    margin: "0 0 12px",
    fontFamily: "'Georgia', serif",
  },
  subtext: {
    fontSize: "15px",
    color: "#9a7070",
    margin: "0 0 16px",
    lineHeight: "1.6",
  },
  highlight: {
    color: "#e8637a",
    fontWeight: "500",
  },
  body2: {
    fontSize: "14px",
    color: "#9a7070",
    margin: "0 0 24px",
    lineHeight: "1.6",
  },
  buttonSection: {
    textAlign: "center",
    margin: "0 0 24px",
  },
  button: {
    backgroundColor: "#ffb3c1",
    color: "#e8637a",
    fontSize: "14px",
    fontWeight: "500",
    padding: "14px 32px",
    borderRadius: "100px",
    textDecoration: "none",
    display: "inline-block",
  },
  expiryBox: {
    backgroundColor: "#fff9fb",
    borderRadius: "16px",
    padding: "16px 20px",
    border: "1px solid #ffd6e7",
  },
  expiryText: {
    fontSize: "13px",
    color: "#9a7070",
    margin: 0,
    lineHeight: "1.6",
    textAlign: "center",
  },
  footer: {
    padding: "20px 32px 28px",
    textAlign: "center",
    borderTop: "1px solid #ffeef4",
  },
  footerText: {
    fontSize: "12px",
    color: "#c4a0a0",
    margin: "0 0 4px",
  },
  footerSmall: {
    fontSize: "11px",
    color: "#d4b8b8",
    margin: 0,
  },
};