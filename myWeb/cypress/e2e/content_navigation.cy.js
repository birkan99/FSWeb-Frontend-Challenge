describe("İçerik Doğrulaması ve Sayfa İçi Navigasyon Testleri", () => {
  const EXPECTED_PROJECTS_COUNT = 1;
  const EXPECTED_SKILLS_COUNT = 3;
  const GITHUB_URL = "https://github.com/birkan99";
  const LINKEDIN_URL = "https://www.linkedin.com/in/birkansar%C4%B1bacak/";
  const EMAIL_ADDRESS = "birkan35@hotmail.com.tr";

  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.clearLocalStorage();
    cy.visit("http://localhost:5173/");
    cy.get("section#skills h2", { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Yetenekler");
  });

  // --- Navigasyon Testleri ---

  it("Header linkleri doğru bölüme kaydırır (Smooth Scroll)", () => {
    const sections = ["#skills", "#projects"];

    sections.forEach((sectionId) => {
      // Linke tıkla
      cy.get(`nav a[href="${sectionId}"]`).first().click();

      // URL'in hash'inin değiştiğini kontrol et
      cy.url().should("include", sectionId);

      // Hedef bölümün görünür olduğunu kontrol et
      cy.get(sectionId).should("be.visible");
    });
  });

  // --- İçerik Doğrulama Testleri ---

  it("Skills bölümü, veri kaynağındaki tüm yetenekleri listeler", () => {
    // 1. Kart sayısını kontrol et
    cy.get("section#skills .grid > div").should(
      "have.length",
      EXPECTED_SKILLS_COUNT
    );

    // 2. İlk yetenek kartını kontrol et
    cy.get("section#skills .grid > div")
      .first()
      .within(() => {
        cy.get("h3").should("contain", "Java Script");
        cy.get("p").should("exist"); // Açıklama metninin varlığını kontrol et
      });
  });

  it("Projects bölümü, kart sayısını, başlıklarını ve linklerini doğrular", () => {
    // 1. Kart sayısını kontrol et
    cy.get("section#projects .grid > div").should(
      "have.length",
      EXPECTED_PROJECTS_COUNT
    );

    // 2. İlk kartı kontrol et
    cy.get("section#projects .grid > div")
      .first()
      .within(() => {
        cy.get("h3").should("exist"); // Başlığın varlığını kontrol et

        // 3. Github linkini kontrol et (Yeni sekme açma ve href)
        cy.contains("a", "Github").should("have.attr", "target", "_blank");

        // 4. View Site linkini kontrol et
        cy.contains("a", "View Site").should("have.attr", "target", "_blank");

        // 5. Teknoloji etiketlerini kontrol et (En az bir tane olmalı)
        cy.get(".flex-wrap > span").should("have.length.of.at.least", 1);
      });
  });

  it("Footer iletişim ve sosyal medya linkleri doğru çalışır", () => {
    // En alta kaydır (Footer'ın görünürlüğünü garanti etmek için)
    cy.scrollTo("bottom");

    // 1. E-posta linkini kontrol et (mailto:)
    cy.contains("footer a", EMAIL_ADDRESS).should(
      "have.attr",
      "href",
      `mailto:${EMAIL_ADDRESS}`
    );

    // 2. GitHub linkini kontrol et
    cy.contains("footer a", "Github")
      .should("have.attr", "href", GITHUB_URL)
      .and("have.attr", "target", "_blank");

    // 3. LinkedIn linkini kontrol et (Footer.jsx'teki href üzerinden)
    cy.get(`footer a[href="${LINKEDIN_URL}"]`)
      .should("exist")
      .and("have.attr", "target", "_blank");
  });
});
