export const contactAPI = {
    submit: async (formData) => {
        // Ağ gecikmesi simülasyonu
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Hata simülasyonu (rastgele bir ihtimalle başarısız döner)
        if (Math.random() < 0.1) {
            console.error("API Error: Form submission failed.");
            return { success: false, message: "Server error" };
        }

        console.log("Form verisi başarıyla gönderildi:", formData);
        
        // Başarılı yanıt
        return { success: true, message: "Message sent" };
    }
};