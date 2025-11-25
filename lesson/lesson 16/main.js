class Student {
  static MAX_ATTENDANCE = 25;

  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = [];
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return parseFloat((sum / this.grades.length).toFixed(2));
  }

  present() {
    if (this.attendance.length < Student.MAX_ATTENDANCE) {
      this.attendance.push(true);
    } else {
      console.warn(
        `${this.firstName}: Досягнуто ліміту відвідуваності (${Student.MAX_ATTENDANCE} записів).`
      );
    }
  }

  absent() {
    if (this.attendance.length < Student.MAX_ATTENDANCE) {
      this.attendance.push(false);
    } else {
      console.warn(
        `${this.firstName}: Досягнуто ліміту відвідуваності (${Student.MAX_ATTENDANCE} записів).`
      );
    }
  }

  getAttendanceRate() {
    if (this.attendance.length === 0) {
      return 0;
    }
    const presentCount = this.attendance.filter(
      (isPresent) => isPresent
    ).length;
    return parseFloat((presentCount / this.attendance.length).toFixed(2));
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAttendanceRate();

    const isExcellentGrade = avgGrade > 90;
    const isExcellentAttendance = avgAttendance > 0.9;

    if (isExcellentGrade && isExcellentAttendance) {
      return "🎉 Молодець!";
    } else if (isExcellentGrade || isExcellentAttendance) {
      return "👍 Добре, але можна краще!";
    } else {
      return "👎 Редиска!";
    }
  }
}

const studentExcellent = new Student(
  "Іван",
  "Петров",
  2005,
  [100, 95, 98, 92, 99]
);
for (let i = 0; i < 25; i++) {
  studentExcellent.present();
}

const studentGood = new Student(
  "Марія",
  "Іваненко",
  2004,
  [85, 90, 88, 95, 87]
);
for (let i = 0; i < 20; i++) {
  studentGood.present();
}
for (let i = 0; i < 5; i++) {
  studentGood.absent();
}

const studentPoor = new Student(
  "Олег",
  "Сидоренко",
  2006,
  [60, 75, 55, 68, 70]
);
for (let i = 0; i < 15; i++) {
  studentPoor.present();
}
for (let i = 0; i < 10; i++) {
  studentPoor.absent();
}

function displayStudentData(student, containerId) {
  const container = document.getElementById(containerId);

  const name = `${student.firstName} ${student.lastName}`;
  const age = student.getAge();
  const avgGrade = student.getAverageGrade();
  const attendanceRate = student.getAttendanceRate();
  const result = student.summary();

  container.innerHTML = `
        <h3>${name} (${age} років)</h3>
        <p><strong>Оцінки:</strong> ${student.grades.join(", ")}</p>
        <p><strong>Середній бал:</strong> <span class="grade">${avgGrade}</span></p>
        <p><strong>Відвідування (Присутній/Всього):</strong> ${
          student.attendance.filter((p) => p).length
        }/${student.attendance.length} (${(attendanceRate * 100).toFixed(
    0
  )}%)</p>
        <div class="summary-result">${result}</div>
    `;

  const summaryDiv = container.querySelector(".summary-result");
  if (result.includes("Молодець")) {
    summaryDiv.classList.add("excellent");
  } else if (result.includes("Добре")) {
    summaryDiv.classList.add("good");
  } else {
    summaryDiv.classList.add("poor");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayStudentData(studentExcellent, "student-excellent");
  displayStudentData(studentGood, "student-good");
  displayStudentData(studentPoor, "student-poor");
});
