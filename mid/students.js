const students = [
  { name: 'Name 1', major: 'MSDC', transcript: [{ course: 303, grade: 87 }, { course: 203, grade: 96 }, { course: 320, grade: 92 }] },
  { name: 'Name 2', major: 'MSDC', transcript: [{ course: 303, grade: 97 }, { course: 203, grade: 93 }] },
  { name: 'Name 3', major: 'ComPro', transcript: [{ course: 472, grade: 86 }, { course: 401, grade: 96 }] },
  { name: 'Name 4', major: 'ComPro', transcript: [{ course: 572, grade: 82 }, { course: 472, grade: 79 }, { course: 401, grade: 90 }] }
];

function computeAverage(arr, major, course) {
  return arr
    .filter(s => s.major === major)
    .filter(s => s.transcript.find(t => t.course === course))
    .map(s => {
      console.log(s);
      return {
        name: s.name,
        average: (s.transcript
          .reduce((result, current, index, all) => result + current.grade, 0)) / s.transcript.length
      }
    });
}
console.log('Answer for 6:')
console.log(computeAverage(students, 'ComPro', 472));