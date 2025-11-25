class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  get averageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return Math.round((sum / this.grades.length) * 100) / 100;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.warn(
        `Увага: Масив відвідуваності для ${this.firstName} ${this.lastName} вже заповнений (25 записів).`
      );
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.warn(
        `Увага: Масив відвідуваності для ${this.firstName} ${this.lastName} вже заповнений (25 записів).`
      );
    }
  }

  summary() {
    const avgGrade = this.averageGrade;
    const attendedClasses = this.attendance.slice(0, this.attendanceIndex);
    const totalClasses = attendedClasses.length;

    const presentCount = attendedClasses.filter(
      (wasPresent) => wasPresent === true
    ).length;
    const avgAttendance = totalClasses > 0 ? presentCount / totalClasses : 0;

    const isExcellentGrade = avgGrade > 90;
    const isHighAttendance = avgAttendance > 0.9;

    if (isExcellentGrade && isHighAttendance) {
      return { text: "Молодець!", class: "excellent" };
    } else if (isExcellentGrade || isHighAttendance) {
      return { text: "Добре, але можна краще", class: "good" };
    } else {
      return { text: "Редиска!", class: "bad" };
    }
  }
}

const student1 = new Student("Анна", "Петренко", 2003);
student1.grades.push(95, 98, 92, 97, 99);
for (let i = 0; i < 23; i++) {
  student1.present();
}
student1.absent();
student1.absent();

const student2 = new Student("Богдан", "Іваненко", 2002);
student2.grades.push(70, 85, 90, 80, 88);
for (let i = 0; i < 24; i++) {
  student2.present();
}
student2.absent();

const student3 = new Student("Олег", "Сидоренко", 2004);
student3.grades.push(60, 75, 50, 65);
for (let i = 0; i < 15; i++) {
  student3.present();
}
for (let i = 0; i < 5; i++) {
  student3.absent();
}

const students = [student1, student2, student3];

function renderStudents() {
  const outputDiv = document.getElementById("students-output");
  let html = "";

  students.forEach((student) => {
    const summary = student.summary();

    const attendedClasses = student.attendance.slice(
      0,
      student.attendanceIndex
    );
    const totalClasses = attendedClasses.length;
    const presentCount = attendedClasses.filter((p) => p === true).length;
    const avgAttendance =
      totalClasses > 0 ? (presentCount / totalClasses) * 100 : 0;

    html += `
            <div class="student-card">
                <div class="name">${student.firstName} ${student.lastName}</div>
                <div class="details">
                    <p><strong>Вік:</strong> ${student.age}</p>
                    <p><strong>Середній бал:</strong> ${
                      student.averageGrade
                    }</p>
                    <p><strong>Оцінки:</strong> 
                        <span class="grades-list">${student.grades
                          .map((g) => `<span>${g}</span>`)
                          .join("")}</span>
                    </p>
                    <p><strong>Відвідуваність (П/В):</strong> ${presentCount}/${totalClasses} (Сер.: ${avgAttendance.toFixed(
      2
    )}%)</p>
                    
                </div>
                <div class="summary ${summary.class}">
                    Резюме: ${summary.text}
                </div>
            </div>
        `;
  });

  outputDiv.innerHTML = html;
}

window.onload = renderStudents;
