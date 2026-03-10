import { socialComments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log('Уровень 1.2 (Числа >=5):', filteredNumbers);

const kitchenAppliances = ['Тостер', 'Чайник', 'Миксер', 'Кофемашина', 'Блендер'];
const hasMixer = kitchenAppliances.includes('Миксер');
console.log('Уровень 1.3 (Есть ли миксер?):', hasMixer);

function reverseArray(arr) {
  return [...arr].reverse();
}
console.log('Уровень 1.4(наоборот):', reverseArray(kitchenAppliances));

const comEmails = socialComments.filter(comment => comment.email.includes('.com'));
console.log('7. Автолюбители .com:', comEmails);

const updatedCommentPosts = socialComments.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));
console.log('8. Обновленные postId:', updatedCommentPosts);

const commentNames = socialComments.map(comment => ({
    id: comment.id,
    name: comment.name
}));
console.log('9. Краткий список имен:', commentNames);

const validatedComments = socialComments.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));
console.log('10. Проверка длины постов:', validatedComments);

const emailsAll = socialComments.map(c => c.email);
console.log('11. Список всех почт:', emailsAll);

console.log('12. Все почты одной строкой:', emailsAll.join(','));