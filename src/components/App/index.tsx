import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { SideBar } from "@/components/SideBar";

import { Router } from "@/router";

export function App() {
  return (
    <>
      <Header />

      <Container>
        <SideBar />
        <Router />
      </Container>
    </>
  );
}
