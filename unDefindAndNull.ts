// typescript에서 undefined와 null은 실제로 각각 undefined 및 null이라는 타입을 가진다.
// void와 마찬가지로 그 자체로로는그다지 유용하지 않습니다.
// 둘다 소문자로만 존재합니다.
// 이 변수들에 할당할수 있는 것들은 거의 없다.

// 설정을 하지 않으면 그렇습니다.(tsconfig.json설정)
// number에 null 또는 undefined를 할당할 수 있다는 의미입니다.

// 하지만 컴파일 옵션에서 --strictNullCheck(보통 켜고사용(타입의 일관성을 위해서))
//를 사용하면 null과 undefined는 void나 자기자신들에게만 할당할 수 있습니다.
// 이 경우 null과 undefined를 할당할수 있게 할려면 union type을 사용해야 합니다.

// null이라는 값으로 할당된것은 null 이라고 한다.
// 무언가 있는데, 사용될 준비가 덜 된상태
// null이라는 타입은 null이라는 값만 가질 수 있다.
// 런타임에서 typeof연산자를 이용해서 알아내면 object타입입니다.

