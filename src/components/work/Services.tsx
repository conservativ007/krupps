import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ButtonsGroup from '../buttons/ButtonsGroup'

const Services = () => {
  return (
    <Accordion
      className='grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-1'
      type='single'
      collapsible
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger className='font-kur md:text-[25px] text-[20px] text-center'>
          Нет договора ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Нет хорошего договора подряда? Каждый раз подписываете договор
            контрагента или используете шаблон, который вам не подходит?
          </p>
          <p>
            Работая со нами, вы получите готовой договор, разработанный
            специально для вас и под ваши интересы.
          </p>
          <p>Проконсультируем как с ним работать и на что обращать внимание.</p>
          <p>
            А если будет надо, всегда сможем помочь в согласовании договора с
            контрагентом.
          </p>
          <p>Собственный договор делается один раз и очень надолго.</p>
          <p>
            Наличие собственного договора выгодно отличает вас от конкурентов,
            по-прежнему работающих с болванками из интернета или с «кривыми
            договорами», на которые сложно смотреть без слез.
          </p>

          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='font-kur md:text-[25px] text-[20px] text-center'>
          Мешает работать заказчик ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Очень частая ситуация, когда Заказчик не исполняет свои
            обязательства, на, например тянет с авансом или с передачей сырья, у
            вас работы «встали», а сроки идут?
          </p>
          <p>
            Не знаете, что предпринять и боитесь штрафов, но продолжаете ждать и
            надеяться? Это фатальная ошибка!
          </p>
          <p>
            Вы можете продолжать договариваться, но ваши юридические действия
            должны быть безупречны!
          </p>
          <p>
            Поможем правильно приостановить работы и подготовим требование к
            заказчику. Снизим риски получения штрафов и неустоек.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='font-kur md:text-[25px] text-[20px] text-center'>
          Спор о качестве ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>У заказчика претензии к качеству работ?</p>
          <p>
            Заказчик настаивает, что работы выполнены некачественно или не в
            полном объеме, а вы с этим не согласны или не совсем согласны?
          </p>
          <p>
            Поможем разобраться в ситуации и найти решение проблемы без
            доведения дела до суда.
          </p>
          <p>Сопроводим экспертизу работ при необходимости.</p>
          <p>
            Оценим риски и перспективы, проработаем позицию, если дело уже в
            суде.
          </p>

          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Не платят за допработы ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Выполнили дополнительные работы, а заказчик отказывается от их
            оплаты? Обычное дело.
          </p>
          <p>Кажется, что все уже потеряно, но это не всегда так.</p>
          <p>
            Давайте мы проанализируем документы, составим требование к
            заказчику. Если потребуется, проведем переговоры или подадим в суд.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-5'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Не принимают работы ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>Заказчик отказался от приемки выполненных работ?</p>
          <p>Никуда он не денется!</p>
          <p>
            Поможем правильно оформить документы и составить требование к
            заказчику так, чтобы мирно разрешить проблему, а если не получится,
            увеличить шансы на победу в суде.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-6'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Уклоняются от приемки ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>Заказчик уклоняется от приемки работ или «кормит завтраками»?</p>
          <p>Будем дисциплинировать его. Не надо просто ждать погоды у моря!</p>
          <p>
            Составим требование и оформим документы так, чтобы работы считались
            принятыми. Поможем добиться оплаты работ.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-7'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Ушел с объекта ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>Подрядчик бросил объект?</p>
          <p>
            Не спешите заводить нового. Это может выйти боком. Давайте сначала
            все оформим как полагается!
          </p>
          <p>
            Поможем зафиксировать уход подрядчика с объекта, составим
            необходимые акты и выдвинем обоснованные требования.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-8'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Разорвал контракт ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>Заказчик отказался от договора?</p>
          <p>
            Очень неприятная история! Но насколько правильно и по какому
            основанию он это сделал? Все ли формальности, предусмотренные
            законом соблюдены?
          </p>
          <p>Давайте разбираться!</p>
          <p>
            Поможем зафиксировать выполненные работы и предъявить требование об
            их оплате. Оспорим необоснованный отказ и заявим об убытках.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-9'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Работа сделана плохо ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Подрядчик плохо выполнил работы или вы видите, что он их плохо
            выполняет, но не понимаете, что же делать?
          </p>
          <p>Мы знаем, как действовать по букве закона!</p>
          <p>
            Подготовим обоснованный отказ от приемки работ, заявим требование об
            устранении недостатков или отказ от договора.
          </p>
          <p>
            Поможем провести экспертизу работ и подготовиться к суду (если
            потребуется).
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-10'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Требование по гарантии ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>Заказчик требует гарантийный ремонт?</p>
          <p>
            А прав ли он? Очень часто недобросовестные заказчика терроризируют
            подрядчиков необоснованными требованиями.
          </p>
          <p>Поможем!</p>
          <p>
            Проанализируем законность требования, поможем договориться с
            заказчиком или отклонить необоснованное требование.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-11'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Получил иск ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>На вас подали в суд?</p>
          <p>Очень неприятно, но это отнюдь не катастрофа!</p>
          <p>У нас богатейшая собственная практика по подрядным спорам.</p>
          <p>
            После анализа документов мы сможем рассказать Вам о том, как будет
            развиваться процесс, чем он закончится с той или иной вероятностью,
            и чем мы сможем помочь вам.
          </p>
          <p>
            Подготовим все необходимые документы и доведем дело до конца. Вы не
            останетесь без поддержки до полного разрешения дела.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-12'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Нужно потянуть время ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Контрагенты задерживают оплату и нет возможности рассчитаться с
            подрядчиком сейчас?
          </p>
          <p>Должен вернуть заказчику неотработанный аванс?</p>
          <p>Заказчик подал обоснованный иск, а все деньги уже освоены?</p>
          <p>Тебе нужно время!</p>
          <p>Мы можем его дать!</p>
          <p>
            А вот сколько мы сможем его дать и какие риски будут у тебя при этом
            мы сможем рассказать только после того, как разберемся с ситуацией.
          </p>
          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-13'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Огромная неустойка ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Заказчик выкатил требование с неустойкой, которая уводит вас в
            минус?
          </p>
          <p>Знакомая ситуация!</p>
          <p>
            Неустойку можно и нужно уменьшать. Только это совсем непростая
            работа. И решений может быть несколько.
          </p>
          <p>
            Для того, чтобы подобрать оптимальное для вашего случая, давайте мы
            посмотрим на имеющиеся документы. Предложим один или несколько
            вариантов решения и вместе сэкономим вам деньги.
          </p>

          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-14'>
        <AccordionTrigger className='md:text-[25px] text-[20px] text-center'>
          Не можешь найти юриста ?
        </AccordionTrigger>
        <AccordionContent className='grid1 text-[16px]'>
          <p>
            Нужен юрист, специализирующийся на подряде, а в сети в основном
            юристы, которые разбираются во всем сразу?
          </p>
          <p>
            Мне это знакомо! Многие коллеги берут все дела подряд, чтобы
            заработать денег и начинают учиться прямо на вашем деле. Если
            попадете на таких – прямо беда.
          </p>
          <p>
            Подряд – наша специализация. Мы знаем о нем все. Я даже День
            строителя отмечаю.
          </p>
          <p>
            Здорово, что вы попали на этот сайт, теперь ваше дело в надежных
            руках. Дальше искать смысла нет.
          </p>

          <ButtonsGroup text='Пишите мне в мессенджер, давайте знакомиться!' />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Services
