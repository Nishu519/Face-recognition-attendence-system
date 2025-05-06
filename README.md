
# Face Recognition Attendance System using LBPH and Haar Cascade

This is a real-time Face Recognition Attendance System built using **OpenCV**, **Flask**, and **React.js**, leveraging **Haar Cascades** for face detection and **LBPH (Local Binary Patterns Histogram)** for face recognition. Attendance data is automatically recorded and saved with timestamps.

---

## 📸 Project Preview

### 🖥️ Frontend UI
![Frontend UI Screenshot](https://github.com/Nishu519/Face-recognition-attendence-system/blob/b5555275f62a4d86628f06034c22588cb053cf7a/Screenshot%2520(89).png)

### 🎥 Real-time Face Recognition
![Face Recognition Screenshot](https://github.com/Nishu519/face_recognition_attendence_system/blob/ac6185b2cdd754df8ea7762ee01ab7ed05915621/Screenshot%2520(90).png)

### 📁 Saved Attendance CSV
![Attendance CSV Screenshot](https://github.com/Nishu519/Face-recognition-attendence-system/blob/99c97bdbc4037c0686db6e8e7a7093f0ed48361c/Screenshot%2520(88).png)


---

## 🧠 Features

- Real-time face detection using Haar cascades
- Face recognition with LBPH algorithm
- Automatic attendance logging to CSV
- User-friendly frontend UI to add users and monitor attendance
- Backend powered by Flask and OpenCV
- Frontend powered by React.js and Tailwind CSS

---

## 📁 Project Structure

```
face_recognition_flask/
│
├── backend/                # Flask Backend
│   ├── app.py
│   ├── haarcascade_frontalface_default.xml
│   ├── model/              # Trained LBPH face model
│   └── Attendance/         # CSVs of daily attendance
│
├── frontend/               # React Frontend
│   ├── src/
│   └── public/
```

---

## 🚀 How to Run the Project

### 📦 Backend Setup

1. Navigate to the backend folder:
```bash
cd face_recognition_flask/backend
```

2. Install all dependencies:
```bash
pip install opencv-python flask pandas joblib flask-cors numpy scikit-learn
```

3. Run the backend server:
```bash
python app.py
```

---

### 🌐 Frontend Setup

1. Open a new terminal and go to the frontend directory:
```bash
cd face_recognition_flask/frontend
```

2. Install required packages:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

---

## 📂 Output

Attendance will be saved in the following format inside the `/Attendance` directory:
```
Name, Roll, Time
Nishu, 202, 18:57:29
Bhumika, 458, 18:58:29
```

---

## 🛠️ Technologies Used

- OpenCV
- Flask
- React.js
- JavaScript
- Python
- Pandas
- LBPH Algorithm
- Haarcascade

---

## ✨ Acknowledgements

This project was created as a demonstration of integrating real-time face recognition with modern web development tools.

---

## 🧑‍💻 Author

Nishu – [GitHub](https://github.com/Nishu519)
