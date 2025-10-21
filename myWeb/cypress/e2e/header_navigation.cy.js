describe("Header ve Uygulama Fonksiyonları Testi", () => {
  beforeEach(() => {
    // LocalStorage'ı temizle
    cy.clearLocalStorage();

    cy.visit("http://localhost:5173/");

    // 'Skills' bölümünün görünmesini bekle (max 10 saniye)
    cy.get("section#skills h2", { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Yetenekler");
  });

  it("Tema (Theme) değiştirme işlevini test eder", () => {
    const themeToggleButtonSelector = "button:has(div.bg-yellow-400)";
    cy.get(themeToggleButtonSelector).as("themeButton");

    // Light -> Dark
    cy.get("@themeButton").click();
    cy.get("header span.uppercase").should("contain", "Light Mode");

    // Dark -> Light
    cy.get("@themeButton").click();
    cy.get("header span.uppercase").should("contain", "Dark Mode");
  });

  it("Dil değiştirme (Language Toggle) işlevini test eder", () => {
    // Başlangıç durumu
    cy.get('nav a[href="#skills"]').should("contain", "Yetenekler");

    // TR -> EN
    cy.contains("button", /TÜRKÇEYE GEÇ|SWITCH TO ENGLISH/i, { timeout: 10000 })
      .should("be.visible")
      .click();

    // Link metninin İngilizceye dönüştüğünü kontrol et
    cy.get('nav a[href="#skills"]')
      .should("not.contain", "Yetenekler")
      .and("contain", "Skills");

    // EN -> TR
    cy.contains("button", /TÜRKÇEYE GEÇ|SWITCH TO ENGLISH/i, { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get('nav a[href="#skills"]').should("contain", "Yetenekler");
  });

  it("Mobil menü açma/kapama işlevini test eder (Küçük Ekran Simülasyonu)", () => {
    // Küçük ekran simülasyonu
    cy.viewport("ipad-mini");

    cy.wait(300);

    // Hamburger menü butonunu bul ve tıkla
    cy.get('button[aria-label="Menüyü Aç"]').should("be.visible").click();

    // Menü overlay görünürlüğünü kontrol et
    const menuOverlay = cy.get(".fixed.inset-0.z-50");
    menuOverlay.should("be.visible");

    // Menüdeki linke tıkla
    menuOverlay.find('nav a[href="#projects"]').click();

    // Menü kapandı mı kontrol et
    cy.get(".fixed.inset-0.z-50").should("not.exist");
  });
});
