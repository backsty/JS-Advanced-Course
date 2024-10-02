import fetchData from "../http/http";

export async function getLevel(userId) {
    try {
        const response = await fetchData(`https://server/user/${userId}`);
        if (response.status === 'ok') {
            return `Ваш текущий уровень: ${response.level}`;
        } else {
            return `Информация об уровне временно недоступна`;
        }
    } catch (error) {
        return 'Произошла ошибка при получении информации об уровне';
    }
}