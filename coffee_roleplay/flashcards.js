document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { front: 'Order', back: '注文 (ちゅうもん)' },
        { front: 'Medium', back: '中 (ちゅう)' },
        { front: 'Large', back: '大 (だい)' },
        { front: 'Small', back: '小 (しょう)' },
        { front: 'Latte', back: 'ラテ' },
        { front: 'Cappuccino', back: 'カプチーノ' },
        { front: 'Espresso', back: 'エスプレッソ' },
        { front: 'Black coffee', back: 'ブラックコーヒー' },
        { front: 'Sugar', back: '砂糖 (さとう)' },
        { front: 'Milk', back: 'ミルク' },
        { front: 'Syrup', back: 'シロップ' },
        { front: 'Vanilla', back: 'バニラ' },
        { front: 'Almond milk', back: 'アーモンドミルク' },
        { front: 'Whipped cream', back: 'ホイップクリーム' },
        { front: 'Pastries', back: 'ペストリー' },
        { front: 'Muffin', back: 'マフィン' },
        { front: 'Croissant', back: 'クロワッサン' },
        { front: 'Scone', back: 'スコーン' },
        { front: 'Blueberry', back: 'ブルーベリー' },
        { front: 'Chocolate chip cookie', back: 'チョコチップクッキー' },
        { front: 'Payment', back: '支払い (しはらい)' },
        { front: 'Credit card', back: 'クレジットカード' },
        { front: 'Contactless payment', back: '非接触決済 (ひせっしょくけっさい)' },
        { front: 'Total', back: '合計 (ごうけい)' }
    ];

    let currentIndex = 0;

    const card = document.getElementById('card');
    const nextCardButton = document.getElementById('next-card');

    function showCard(index) {
        card.querySelector('.front').textContent = flashcards[index].front;
        card.querySelector('.back').textContent = flashcards[index].back;
    }

    function flipCard() {
        card.classList.toggle('flipped');
    }

    nextCardButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        showCard(currentIndex);
    });

    card.addEventListener('click', flipCard);

    showCard(currentIndex);
});
