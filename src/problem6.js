function problem6(forms) {
  // 중복 제거
  let result = new Set();

  for (form of forms) {
    // 닉네임 전체 길이는 1자 이상 && 두 글자 이상의 문자가 연속적으로 포함이기 때문에 1일 경우, 무시
    if (form[1].length === 1) continue;
    // 신청할 수 있는 이메일은 email.com 도메인으로만 제한
    if (!isValidEmail(form[0])) continue;

    for (let i = 0; i < form[1].length - 1; i++) {
      const str = form[1].substr(i, 2);

      for (other of forms) {
        // 자기자신 제외
        if (form[1] === other[1]) continue;

        if (other[1].includes(str)) result.add(other[0]);
      }
    }
  }

  // 오름차순으로 정렬
  return [...result].sort();
}

function isValidEmail(email) {
  const domain = email.split('@');

  if (domain[1] === "email.com") return true;

  return false;
}

// result = ["jason@email.com", "jm@email.com", "mj@email.com"]
// console.log(?problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]));

module.exports = problem6;
