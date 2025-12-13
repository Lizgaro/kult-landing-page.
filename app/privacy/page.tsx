import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-kult-black text-kult-text">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-kult-muted hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Вернуться на главную
        </Link>

        <h1 className="text-4xl font-serif font-bold text-white mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-kult-muted">
          <p className="text-sm text-kult-muted/50">Дата вступления в силу: 1 января 2025 года</p>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
              пользователей сервиса KULT Assembly (далее — «Сервис»).
            </p>
            <p>
              Использование Сервиса означает безоговорочное согласие пользователя с настоящей Политикой и указанными в
              ней условиями обработки персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Персональные данные пользователей</h2>
            <p>В рамках настоящей Политики под персональными данными понимаются:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя, фамилия пользователя</li>
              <li>Контактный номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Аккаунт в Telegram</li>
              <li>Информация о роде деятельности</li>
              <li>Иная информация, предоставленная пользователем добровольно</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Идентификация пользователя в рамках Сервиса</li>
              <li>Предоставление доступа к функционалу Сервиса</li>
              <li>Связь с пользователем для информирования об услугах</li>
              <li>Подбор партнеров и проектов для сотрудничества</li>
              <li>Улучшение качества Сервиса</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Защита персональных данных</h2>
            <p>
              Администрация Сервиса принимает необходимые организационные и технические меры для защиты персональных
              данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию об обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Контактная информация</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, обращайтесь через Telegram-бот:
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
