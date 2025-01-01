# 🌟 **POS (Point of Sale) Uygulaması**

### 🚀 Dijital Satış, Sipariş ve Faturalandırma Çözümleri

---

## 🖥️ **Proje Hakkında**
Bu proje, işletmelerin satış, sipariş yönetimi ve faturalandırma işlemlerini dijitalleştiren bir **Point of Sale (POS)** uygulamasıdır. **MERN Stack** teknolojileri ile modern ve güvenli bir yapı sunar.

### 🎯 **Projenin Amacı**
- Satış ve sipariş işlemlerini dijitalleştirmek.
- Kullanıcı dostu bir **Admin Paneli** ile işlemleri kolaylaştırmak.
- Güvenli kimlik doğrulama ve parola yönetimi sağlamak.
- Esnek ve responsive bir arayüz geliştirmek.

---

## 🔧 **Kullanılan Teknolojiler**

| Teknoloji            | Açıklama                              |
|----------------------|---------------------------------------|
| **Frontend**         | React, Tailwind CSS, Ant Design       |
| **Backend**          | Express.js, Node.js                  |
| **Veri Tabanı**      | MongoDB                              |
| **State Yönetimi**   | Redux-Toolkit                        |
| **Kimlik Doğrulama** | JWT ve bcrypt                        |
| **Test**             | Postman                              |
| **Dağıtım**          | Vercel / Heroku                      |

---

## 🗂️ **Proje Yapısı**

### 1️⃣ **İhtiyaç Analizi**
- Kullanıcı gereksinimlerinin belirlenmesi.
- Roller ve yetkilerin tanımlanması (Admin, Kasiyer vb.).
- Beklenen işlevlerin (satış, sipariş, faturalandırma) analiz edilmesi.

### 2️⃣ **Tasarım**
- **React** ile kullanıcı dostu bir arayüz geliştirilmesi.
- **Tailwind CSS** ile responsive tasarım.
- Admin Paneli ve kullanıcı profilleri için özel tasarımlar.

### 3️⃣ **Geliştirme**
- **React-Router-Dom** ile sayfa yönlendirmeleri.
- **Express.js** ile REST API entegrasyonu.
- **MongoDB** ile veri saklama.
- **JWT** ve **bcrypt** ile güvenli kimlik doğrulama.

### 4️⃣ **Test ve Entegrasyon**
- Postman kullanarak API testleri.
- Frontend ve Backend entegrasyonu.
- Sipariş ve faturalandırma modüllerinin kontrolü.

### 5️⃣ **Dağıtım**
- Vercel veya Heroku üzerinde canlıya alma.
- Proje yönetimi için GitHub versiyon kontrolü.

---

## 📜 **Kurulum Rehberi**

### Gereksinimler:
- Node.js
- MongoDB
- Git

### Adımlar:

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name

2.Bağımlılıkları yükleyin:

npm install

3.Veritabanını başlatın:

MongoDB'nin çalıştığından emin olun.

4.Sunucuyu başlatın:

node index.js

5.Frontend'i çalıştırın:

cd client

npm run start

http://localhost:3000




### Ekran Görüntüleri ve Açıklamalar
Proje kapsamındaki uygulamanın bazı önemli ekran görüntüleri ve açıklamaları aşağıda verilmiştir.

---

### 1️⃣ **Kayıt Ekranı**
Kullanıcıların sisteme kayıt olmasını sağlayan form ekranı. Zorunlu alanlar: Kullanıcı Adı, E-mail, Şifre ve Şifre Tekrar.
<img width="700" alt="Ekran Resmi 2025-01-01 23 54 21" src="https://github.com/user-attachments/assets/f14f2bb3-6c24-4acd-abd5-8f5aad7753d0" />

---

### 2️⃣ **Ana Sayfa**
Ürünlerin listelendiği ana ekran. Kategoriler sol tarafta, sepetteki ürünler ise sağ tarafta görüntülenir.
<img width="700" alt="Ekran Resmi 2025-01-01 23 52 06" src="https://github.com/user-attachments/assets/289b88d3-64dc-483b-89f9-ba4bf8b268ac" />


---

### 3️⃣ **Sepet Yönetimi**
Sepet içeriğinin detaylı yönetildiği ekran. Ürünler artırılabilir veya azaltılabilir.
<img width="700" alt="Ekran Resmi 2025-01-02 00 06 31" src="https://github.com/user-attachments/assets/6cbc2ddc-f659-42cc-b869-8b32384ec606" />


---

### 4️⃣ **Fatura Görüntüleme**
Müşteri bilgilerini ve satın alınan ürünlerin detaylarını içeren fatura ekranı.
<img width="700" alt="Ekran Resmi 2025-01-01 23 53 40" src="https://github.com/user-attachments/assets/81296fa2-fae5-467f-bba0-b1e21741b475" />


---

### 5️⃣ **Müşteri Yönetimi**
Müşteri bilgilerini listeleyen yönetim ekranı. Telefon numarası ve işlem tarihi gibi detayları içerir.
<img width="700" alt="Ekran Resmi 2025-01-01 23 53 54" src="https://github.com/user-attachments/assets/43764501-77d4-4227-bb86-2db9a1e7eb9c" />


---

### 6️⃣ **İstatistikler**
Toplam satışlar, kazançlar ve diğer metrikleri gösteren bir dashboard ekranı.
<img width="700" alt="Ekran Resmi 2025-01-01 23 54 04" src="https://github.com/user-attachments/assets/a3d7661d-9389-4320-8be1-31aba1946828" />

---

### 7️⃣ **Giriş Ekranı**

Sisteme giriş yapılmasını sağlayan ekran.

<img width="700" alt="Ekran Resmi 2025-01-01 23 54 32" src="https://github.com/user-attachments/assets/a82bd6be-ff0a-4df4-b609-a9a6128cfc2b" />

---

### 8️⃣ **Yeni Kategori Ekle**
Yönetici tarafından yeni bir ürün kategorisinin oluşturulmasını sağlayan pop-up form.
<img width="700" alt="Ekran Resmi 2025-01-01 23 56 14" src="https://github.com/user-attachments/assets/e917f697-a5bf-4740-b8b1-2471c62fe25e" />


---

### 9️⃣ **Fatura Oluştur**
Müşteri bilgilerini girerek yeni bir fatura oluşturulmasını sağlayan form ekranı.
<img width="700" alt="Ekran Resmi 2025-01-01 23 56 28" src="https://github.com/user-attachments/assets/d5ddf023-626b-4dfb-b7e2-43fbf472cdff" />

---

### 1️⃣0️⃣ **Yeni Ürün Ekle**
Yeni bir ürünün oluşturulmasını sağlayan yönetim arayüzü.
<img width="700" alt="Ekran Resmi 2025-01-01 23 56 45" src="https://github.com/user-attachments/assets/88c80326-19ac-4aff-8a60-4b345772eea4" />

---




---

## 💡 **Son Notlar**
Bu proje, **POS (Point of Sale)** uygulamaları için esnek, modern ve güvenli bir çözüm sunmaktadır. Geri bildirimlerinizi ve katkılarınızı bekliyorum! 🚀

---

## 📫 **İletişim**
- **Geliştirici:** Yusuf Çakmak  
- **LinkedIn:** [LinkedIn Profilim](https://www.linkedin.com/in/myusufcakmak/)

---

## ⭐ **Destek Olun**
Bu projeyi beğendiyseniz:  
1. ⭐ Repo'ya yıldız verin!  
2. 📦 Katkıda bulunmak için bir **Pull Request** gönderin.  
3. 💬 Görüşlerinizi paylaşmak için bir **Issue** oluşturun.  

---

### 🙏 **Teşekkürler!**
> Bu projeyi inceleyerek zaman ayırdığınız için teşekkür ederim. Sizlerle çalışmak bir zevk! 💙  

<p align="center">
  <img src="https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif" alt="Thank You!" width="200">
</p>

---
