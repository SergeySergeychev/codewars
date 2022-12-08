// Solution have been made by Andrea from dev.to
function solution(arr) {
  function addSequenceToString(sequence, string) {
    if (string) {
      string += ",";
    }
    // return sequnced numbers or separate sequence of numbers by comma.
    return (string +=
      sequence.length >= 3
        ? `${sequence[0]}-${sequence[sequence.length - 1]}`
        : sequence.join(","));
  }

  let str = "";
  let seq = [];
  for (let i = 0; i <= arr.length; i++) {
    let num = arr[i];
    let prev = seq[seq.length - 1];
    // If it's first number in array OR next number is bigger by one.
    if (seq.length === 0 || prev === num - 1) {
      seq.push(num);
    } else {
      str = addSequenceToString(seq, str);
      // Update sequence.
      seq = [num];
    }
  }

  return str;
}
