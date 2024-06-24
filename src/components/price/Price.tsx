import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import ButtonsGroup from '../buttons/ButtonsGroup'

const Price = () => {
  return (
    <section className='container font-kur text-[#867373]'>
      <p className=' text-[40px] text-center uppercase'>цена работы</p>

      <Accordion className='grid grid-cols-1 gap-5' type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Консультации
          </AccordionTrigger>
          <AccordionContent className='grid2 text-[16px]'>
            <p>
              Обращение через мессенджер с простым вопросом, на который есть
              однозначный ответ, - бесплатно.
            </p>
            <p>
              Устная онлайн консультация (телефон, мессенджеры, skype , zoom ,
              google meet ) после ознакомления с документами - 5 000 рублей
            </p>
            <p>
              Устная консультация в офисе после ознакомления с документами - 7
              000 рублей
            </p>
            <p>Письменная консультация : от 5000 рублей.</p>
            <p>
              Подготовка документов (писем, требований и т. п.) по итогам
              консультации – от 2 500 рублей за один документ.
            </p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Договорная работа
          </AccordionTrigger>
          <AccordionContent className='grid2 text-[16px]'>
            <p>Р азработка договора под заказ – от 10 000 рублей .</p>
            <p>
              Выезд на переговоры вместе с клиентом или в качестве п
              редставителя клиента : от 5000 рублей в час
            </p>
            <p></p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Переговоры в интересах клиента
          </AccordionTrigger>
          <AccordionContent className='grid2 text-[16px]'>
            <p>
              Переговоры с представителем контрагента по телеф ону - 2 500
              рублей за 30 минут общения.
            </p>
            <p>
              Анализ представленного договора и внесение в него правок – от 5
              000 рублей.
            </p>
            <p>Подготовка протокола разногласий – от 7500 рублей.</p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Претензионная работа
          </AccordionTrigger>
          <AccordionContent className='grid2 text-[16px]'>
            <p>
              Составление претензии (досудебного требования) после анализа
              документов – от 10 000 рублей
            </p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Ведение дела в суде
          </AccordionTrigger>
          <AccordionContent className='grid2 text-[16px]'>
            <p>Упрощенный порядок – 50 000 рублей.</p>
            <p>Общий порядок – от 70 000 рублей.</p>
            <p>
              В случае предъявления встречного иска к согласованной стоимости
              услуг применяется коэффициент 1.
            </p>
            <p>Апелляция – от 50 000 рублей.</p>
            <p>Кассация – от 50 000 рублей.</p>
            <p>Гонорар успеха – обсуждается индивидуально.</p>
            <p></p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger className='font-kur text-[25px] text-center'>
            Постоянная правовая поддержка
          </AccordionTrigger>
          <AccordionContent className='text-[16px] grid1'>
            <p>
              Удобно, когда в любой момент можно позвонить или написать юристу и
              поставить задачку для оперативной отработки. Мы предлагаем
              заключить с нами договор на постоянную правовую поддержку с
              внесением однократного платежа в удобной вам сумме. При наличии
              таког о договора:
            </p>

            <p>1. За вами закрепляется ответственный юрист.</p>
            <p>
              2. Ваши вопросы отрабатываются в приоритетном порядке и в
              кратчайший срок.
            </p>
            <p>
              3. Вы получаете скидку в 25% от цен на все услуги, указанные на
              сайте, кроме судов.
            </p>
            <p>
              4. Платеж по договору можно выбирать в течение год а с момента его
              внесения.
            </p>
            <ButtonsGroup text='Пишите сразу! Проблема сама себя не решит!' />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Price
