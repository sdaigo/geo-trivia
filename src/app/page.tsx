import Quiz from "@/boundary/quiz/ui";
import { Container } from "@/styled-system/jsx";

export default function Home() {
  return (
    <Container maxW="2/3" my={12}>
      <Quiz />
    </Container>
  );
}
