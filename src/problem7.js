function problem7(user, friends, visitors) {
  // 친구 추천 => 이미 친구인 경우 제외
  let map = new Map();

  // friends 배열의 모든 값 연결
  const connect = connectFriends(friends);
  // user와 친구인 friend 배열 가져오기
  const friendList = connect.get(user);

  // user와 친구안 친구들 10점 추가
  for (key of friendList) {
    const values = connect.get(key);

    for (value of values) {
      // 본인 제외
      if (value === user) continue;

      // 이미 값이 존재하는 경우, 기존 값 + 10 / 아닌 경우, 10
      if (map.has(value)) map.set(value, map.get(value) + 10);
      else map.set(value, 10);
    }
  }

  // 타임라인 방문객 1점 추가
  for (visitor of visitors) {
    // user와 친구인 경우 제외
    if (friendList.includes(visitor)) continue;

    // 이미 값이 존재하는 경우, 기존 값 + 1 / 아닌 경우, 1
    if (map.has(visitor)) map.set(visitor, map.get(visitor) + 1);
    else map.set(visitor, 1);
  }

  // map을 array로 변환
  const mapToArray = [...map];

  // value(점수)가 가장 높은 순으로 정렬
  mapToArray.sort((a, b) => b[1] - a[1]);

  // key만 배열로 만들기
  const result = Array.from(mapToArray, ([key, value]) => (key));

  // 6명 이상일 경우, 5번째 사람까지 반환
  if (result.length > 5) return result.slice(0, 5);

  return result;
}

function connectFriends(friends) {
  let map = new Map();

  for (friend of friends) {
    if (map.has(friend[0])) map.get(friend[0]).push(friend[1]);
    else map.set(friend[0], [friend[1]]);

    if (map.has(friend[1])) map.get(friend[1]).push(friend[0]);
    else map.set(friend[1], [friend[0]]);
  }

  return map;
}

// result = ["andole", "jun", "bedi"]
// console.log(problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]));

// result = ["andole", "jun", "mimi", "bedi", "bobo"]
// console.log(problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"], ["shakevan", "mimi"]], ["bedi", "bedi", "donut", "bedi", "shakevan", "nana", " mimi", "bobo", "bobo"]));

module.exports = problem7;
