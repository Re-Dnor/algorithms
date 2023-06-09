## Временная мертвая зона (TDZ)

Переменные объявленные через <code>let</code> и <code>const</code> также имеют всплытие, но тогда почему к ним нельзя получить доступ до их объявления?<br>
Ответ на этот вопрос лежит в рамках концепции временной мертвой зоны (TDZ). Переменные, объявленные с помощью <code>let</code> и <code>const</code>, поднимаются, но находятся в TDZ. Это предотвращает доступ к ним до того, как их объявление будет фактически выполнено во время пошагового выполнения кода.

Временная мертвая зона — это период времени, в течение которого объявления <code>let</code> и <code>const</code> недоступны. Временная мертвая зона начинается, когда выполнение кода входит в блок, содержащий объявление <code>let</code> или <code>const</code>, и продолжается до тех пор, пока объявление не будет выполнено.

Более подробно можно почитать:

- [educative](https://www.educative.io/answers/what-is-the-temporal-dead-zone-in-javascript)
- [jsinthebits.com](https://jsinthebits.com/what-is-the-temporal-dead-zone-e41369d4/)
