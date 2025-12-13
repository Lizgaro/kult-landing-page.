import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-kult-black text-kult-text">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-kult-muted hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Вернуться на главную
        </Link>

        <h1 className="text-4xl font-serif font-bold text-white mb-8">Публичная оферта</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-kult-muted">
          <p className="text-sm text-kult-muted/50">Редакция от 1 января 2025 года</p>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Общие положения</h2>
            <p>
              Настоящий документ является официальным предложением (публичной офертой) KULT Assembly (далее —
              «Исполнитель») и содержит все существенные условия предоставления услуг.
            </p>
            <p>
              Акцептом настоящей оферты является подача заявки через Telegram-бот @CultScale_bot или форму на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Предмет оферты</h2>
            <p>Исполнитель предоставляет Заказчику следующие услуги:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Доступ к закрытому сообществу предпринимателей, маркетологов и лидеров мнений</li>
              <li>Подбор партнеров для сотрудничества по модели Profit Sharing</li>
              <li>Организация и проведение 7-дневных челленджей</li>
              <li>Консультационная поддержка по вопросам партнерств</li>
              <li>Доступ к базе проектов и специалистов</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Условия сотрудничества</h2>
            <p>
              3.1. Модель сотрудничества строится на принципе Profit Sharing — распределения прибыли между участниками
              проекта.
            </p>
            <p>
              3.2. Конкретные условия распределения прибыли определяются индивидуально для каждого проекта и фиксируются
              в отдельном соглашении.
            </p>
            <p>
              3.3. Исполнитель не гарантирует конкретных финансовых результатов, поскольку они зависят от множества
              факторов.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Права и обязанности сторон</h2>
            <h3 className="text-lg font-bold text-white mt-6 mb-3">4.1. Исполнитель обязуется:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Обеспечить доступ к сервису после прохождения валидации</li>
              <li>Осуществлять подбор релевантных партнеров</li>
              <li>Обеспечивать конфиденциальность информации</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-3">4.2. Заказчик обязуется:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставлять достоверную информацию о себе и своей деятельности</li>
              <li>Соблюдать правила сообщества</li>
              <li>Выполнять взятые на себя обязательства в рамках партнерств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Ответственность сторон</h2>
            <p>
              5.1. За неисполнение или ненадлежащее исполнение обязательств стороны несут ответственность в соответствии
              с законодательством РФ.
            </p>
            <p>
              5.2. Исполнитель не несет ответственности за действия третьих лиц, в том числе партнеров, подобранных
              через сервис.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Заключительные положения</h2>
            <p>
              6.1. Настоящая оферта вступает в силу с момента ее размещения на сайте и действует до момента ее отзыва
              Исполнителем.
            </p>
            <p>
              6.2. Исполнитель оставляет за собой право вносить изменения в условия оферты с уведомлением через сайт или
              Telegram-бот.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Контакты</h2>
            <p>
              Связь с Исполнителем осуществляется через Telegram-бот:
              <a href="https://t.me/CultScale_bot" className="text-white hover:underline ml-1">
                @CultScale_bot
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
