document.addEventListener('DOMContentLoaded', function () {
    // Шаг 1: Создаем массив оценок для 12 студентов
    let grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
    console.log('Оценки студентов:', grades);

    // Шаг 2: Рассчитываем средний балл
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    // Шаг 3: Находим максимальный балл
    let maxGrade = Math.max(...grades);

    // Шаг 4: Находим минимальный балл
    let minGrade = Math.min(...grades);

    // Шаг 5: Количество положительных оценок (60 и выше)
    let positiveGrades = grades.filter(grade => grade >= 60).length;

    // Шаг 6: Количество отрицательных оценок (ниже 60)
    let negativeGrades = grades.filter(grade => grade < 60).length;

    // Шаг 7: Преобразуем оценки в буквенные
    let letterGrades = grades.map(grade => {
        if (grade >= 80) return 'A';
        else if (grade >= 60) return 'B';
        else if (grade >= 40) return 'C';
        else if (grade >= 20) return 'D';
        else return 'E';
    });

    // Вывод результатов в HTML
    document.getElementById('average').textContent = average.toFixed(2);
    document.getElementById('max').textContent = maxGrade;
    document.getElementById('min').textContent = minGrade;
    document.getElementById('positive').textContent = positiveGrades;
    document.getElementById('negative').textContent = negativeGrades;
    document.getElementById('letter-grades').textContent = letterGrades.join(', ');
    });