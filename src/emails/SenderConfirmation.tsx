import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface SenderConfirmationProps {
  cardUrl: string;
  occasionLabel: string;
  recipientEmail: string;
  expiryDate: string;
}

export function SenderConfirmation({
  cardUrl,
  occasionLabel,
  recipientEmail,
  expiryDate,
}: SenderConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your {occasionLabel} card has been sent ♡
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Header */}
          <Section style={styles.header}>
            <Text style={styles.headerLabel}>a cute website</Text>
          </Section>

          {/* Content */}
          <Section style={styles.content}>
            <Heading style={styles.heading}>
              Your card is on its way! 🌙
            </Heading>

            <Text style={styles.subtext}>
              We've delivered your {occasionLabel} card to{" "}
              <span style={styles.highlight}>{recipientEmail}</span>. We hope
              it makes them smile ♡
            </Text>

            {/* Details box */}
            <Section style={styles.detailsBox}>
              <Text style={styles.detailRow}>
                <span style={styles.detailLabel}>Sent to</span>
                <span style={styles.detailValue}>{recipientEmail}</span>
              </Text>
              <Text style={styles.detailDivider} />
              <Text style={styles.detailRow}>
                <span style={styles.detailLabel}>Occasion</span>
                <span style={styles.detailValue}>{occasionLabel}</span>
              </Text>
              <Text style={styles.detailDivider} />
              <Text style={styles.detailRow}>
                <span style={styles.detailLabel}>Expires on</span>
                <span style={styles.detailValue}>{expiryDate}</span>
              </Text>
            </Section>

            <Text style={styles.body2}>
              You can also view your card at any time by clicking below:
            </Text>

            {/* CTA Button */}
            <Section style={styles.buttonSection}>
              <Button href={cardUrl} style={styles.button}>
                View the card
              </Button>
            </Section>

            {/* Expiry notice */}
            <Section style={styles.expiryBox}>
              <Text style={styles.expiryText}>
                🌸 This card will float away on{" "}
                <strong>{expiryDate}</strong>. Let your recipient know to
                download it if they'd like to keep it forever.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              sent with love via a cute website ♡
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
    backgroundColor: "#fff9d6",
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
    margin: "0 0 24px",
    lineHeight: "1.6",
  },
  highlight: {
    color: "#e8637a",
    fontWeight: "500",
  },
  detailsBox: {
    backgroundColor: "#fff9fb",
    borderRadius: "16px",
    padding: "4px 20px",
    border: "1px solid #ffd6e7",
    marginBottom: "24px",
  },
  detailRow: {
    fontSize: "13px",
    color: "#9a7070",
    margin: "12px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  detailLabel: {
    color: "#c4a0a0",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  detailValue: {
    color: "#3d2a2a",
    fontWeight: "500",
  },
  detailDivider: {
    borderTop: "1px solid #ffeef4",
    margin: "0",
    padding: "0",
    height: "1px",
  },
  body2: {
    fontSize: "14px",
    color: "#9a7070",
    margin: "0 0 20px",
    lineHeight: "1.6",
  },
  buttonSection: {
    textAlign: "center",
    margin: "0 0 24px",
  },
  button: {
    backgroundColor: "#fff9d6",
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
    margin: 0,
  },
};