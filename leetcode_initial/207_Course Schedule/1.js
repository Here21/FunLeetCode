/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function Course() {
  this.numPrerequisites = 0;
  this.isPrerequisiteFor = [];
  this.clear = false;
}

function canFinish(numCourses, prerequisites) {

  // initialize
  const courses = [];
  for (let i = 0; i < numCourses; i++) courses[i] = new Course();

  prerequisites.forEach(([a, b]) => {
    courses[a].numPrerequisites++;
    courses[b].isPrerequisiteFor.push(a);
  });

  // console.log(courses);

  let finished = 0; // how much courses can be finished (clear=true)
  let prev = -1;    // trace the value of `finished` in previous iteration

  // terminate the loop if we cannot find out any new course able to be finished within one iteration
  while (finished > prev) {
    prev = finished;

    for (let i = 0; i < numCourses; i++) {
      if (courses[i].numPrerequisites === 0 && !courses[i].clear) {
        // courses[i] has no prerequisites or all of its prerequisites has been fulfilled
        // `clear=false` means we have to notify the courses which have prerequisite of course[i]
        courses[i].isPrerequisiteFor.forEach((j) => {
          // notify courses[j]
          courses[j].numPrerequisites--;
        });
        courses[i].clear = true;
        finished++;
      }
    }
  }

  return finished === numCourses;
}

console.log(canFinish(4, [[1,0], [0, 2], [2, 1], [3, 0]]));
