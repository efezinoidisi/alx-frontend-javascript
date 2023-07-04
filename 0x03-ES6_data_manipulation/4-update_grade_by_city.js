//

export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  return studentsList
    .filter(({ location }) => location === city)
    .map((student) => {
      let updatedInfo = { ...student, grade: 'N/A' };
      newGrades.forEach(({ studentId, grade }) => {
        if (studentId === student.id) {
          updatedInfo = { ...student, grade };
        }
      });

      return updatedInfo;
    });
}
