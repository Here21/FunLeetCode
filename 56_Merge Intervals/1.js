/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

var merge = function(intervals) {
  console.log(intervals);
  if(intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);
  const len = intervals.length;
  let start = intervals[0].start;
  let end = intervals[0].end;
  const result = [];

  for(let i = 1; i < len; i++) {
    if(intervals[i].start <= end) {
      end = Math.max(intervals[i].end, end);
    } else {
      result.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  result.push(new Interval(start, end));

  return result;
};

// [[1,3],[2,6],[8,10],[15,18]]
const intervals = [
  {
    start: 1,
    end: 4,
  },
  {
    start: 2,
    end: 3,
  },
  {
    start: 5,
    end: 6,
  },
  {
    start: 8,
    end: 10,
  },
  {
    start: 15,
    end: 18,
  },  
]

console.log(merge(intervals))