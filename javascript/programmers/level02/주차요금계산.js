/**
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/92341
 */

/**
 * 1트: 빡 구현 해보기..
 */
{
  function getMinutes(history) {
    const [time, type] = history.split(" ");
    const [hour, minutes] = time.split(":");
    return Number(hour) * 60 + Number(minutes);
  }

  function solution(fees, records) {
    const [baseMinutes, baseFee, baseUnitMinutes, baseUnitFee] = fees;

    // 1. 차량번호별 주차기록 dict 생성
    const cars = {};
    records.forEach((record) => {
      const [time, car, inout] = record.split(" ");

      if (car in cars) {
        cars[car].history.push(`${time} ${inout}`);
      } else {
        cars[car] = { history: [`${time} ${inout}`], minutes: 0, fee: 0 };
      }
    });

    // 마지막 출차 내역이 없는 경우
    for (const car in cars) {
      if (cars[car].history.length % 2) {
        cars[car].history.push(`23:59 OUT`);
      }
    }

    // 2. 누적 주차 시간 계산
    for (const car in cars) {
      const { history } = cars[car];
      for (let i = 0; i < history.length; i += 2) {
        const time1 = getMinutes(history[i]);
        const time2 = getMinutes(history[i + 1]);
        cars[car].minutes += time2 - time1;
      }
    }

    // 3. 주차 요금 계산
    for (const car in cars) {
      const { minutes } = cars[car];
      cars[car].fee = baseFee;

      if (minutes > baseMinutes) {
        cars[car].fee +=
          Math.ceil((minutes - baseMinutes) / baseUnitMinutes) * baseUnitFee;
      }
    }

    // 4. 차량 번호가 작은 자동차부터 출력
    let answer = [];
    const keys = Object.keys(cars).sort();
    keys.forEach((key) => {
      answer.push(cars[key].fee);
    });

    return answer;
  }
}
