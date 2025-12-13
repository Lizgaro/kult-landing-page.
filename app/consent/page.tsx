import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ConsentPage() {
  return (
    <div className="min-h-screen bg-kult-black text-kult-text">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-kult-muted hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Вернуться на главную
        </Link>

        <h1 className="text-4xl font-serif font-bold text-white mb-8">Согласие на обработку персональных данных</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-kult-muted">
          <p>
            Настоящим я, субъект персональных данных, свободно, своей волей и в своем интересе даю согласие на обработку
            моих персональных данных сервисом KULT Assembly.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Перечень персональных данных</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Идентификатор Telegram</li>
              <li>Сведения о профессиональной деятельности</li>
              <li>Иные данные, необходимые для оказания услуг</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Цели обработки</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Регистрация и идентификация в Сервисе</li>
              <li>Предоставление доступа к закрытому сообществу</li>
              <li>Подбор партнеров для сотрудничества</li>
              <li>Информирование о новых возможностях и проектах</li>
              <li>Исполнение обязательств по договору оферты</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Действия с персональными данными</h2>
            <p>
              Согласие дается на совершение следующих действий: сбор, запись, систематизацию, накопление, хранение,
              уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ),
              обезличивание, блокирование, удаление, уничтожение.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Срок действия согласия</h2>
            <p>Настоящее согласие действует со дня его подписания до дня отзыва в письменной форме.</p>
            <p>
              Согласие может быть отозвано путем направления соответствующего уведомления через Telegram-бот{" "}
              <a href="https://t.me/CultScale_bot" className="text-white hover:underline">
                @CultScale_bot
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">Правовое основание</h2>
            <p>
              Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
              «О персональных данных».
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
