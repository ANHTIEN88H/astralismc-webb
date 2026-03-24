import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import ClassesShowcase from "../../components/ClassesShowcase";
import VanguardDetail from "../../pages/classes/VanguardDetail";
import AetherMageDetail from "../../pages/classes/AetherMageDetail";
import VoidWalkerDetail from "../../pages/classes/VoidWalkerDetail";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      initial,
      whileInView,
      viewport,
      transition,
      ...props
    }) => <div {...props}>{children}</div>,
  },
}));

describe("Class detail routes", () => {
  it("renders 3 'Xem Chi Tiết' links with exact class paths", () => {
    render(
      <MemoryRouter>
        <ClassesShowcase />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole("link", { name: /xem chi tiết/i });
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(links).toHaveLength(3);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/classes/vanguard",
        "/classes/aether-mage",
        "/classes/void-walker",
      ]),
    );
  });

  it("renders Vanguard detail heading", () => {
    render(
      <MemoryRouter>
        <VanguardDetail />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /vanguard/i })).toBeTruthy();
  });

  it("renders Aether Mage detail heading", () => {
    render(
      <MemoryRouter>
        <AetherMageDetail />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /aether mage/i })).toBeTruthy();
  });

  it("renders Void Walker detail heading", () => {
    render(
      <MemoryRouter>
        <VoidWalkerDetail />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /void walker/i })).toBeTruthy();
  });
});
