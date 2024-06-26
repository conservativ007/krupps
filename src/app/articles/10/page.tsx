import ButtonTelegram from '@/components/buttons/ButtonTelegram'
import ButtonWhatsUp from '@/components/buttons/ButtonWhatsUp'

const page = () => {
  return (
    <div className='container flex items-center justify-center min-h-screen'>
      <div className='grid1 py-10 not-copy'>
        <p className='font-bold'>Смешанный договор</p>
        <p>
          Здравствуй, дорогой читатель! Я рад приветствовать тебя на моем сайте.
          В разделе «статьи» мы с командой освещаем правовые вопросы, которые
          регулярно возникают у наших клиентов, занимающихся бизнесом. Если вам
          лень читать, то знайте, что практически по каждой из статей у нас есть
          ролик на ютуб канале. Ниже есть кнопка, если удобнее смотреть, то
          переходите туда. Темой сегодняшней статьи является смешанный договор.
        </p>
        <p className='font-bold'>1. Что такое смешанный договор.</p>
        <p>
          При ведении бизнеса часто приходится сталкиваться со смешанными
          договорами. Эти договоры содержат элементы различных соглашений и
          носят комплексный характер. Обычно такие договоры предусматривают
          одновременно поставку и выполнение работ с поставленным оборудованием
          (либо только монтажных, либо еще и пуско-наладочных). Нередко
          заказчики предпочитают объединять все в один договор вместо подписания
          трех отдельных соглашений.
        </p>
        <p>
          Однако здесь возникает проблема. Чем больше разной "начинки" в
          договоре, тем он должен быть более детализированным и обширным. При
          заключении трех отдельных договоров условия в каждом из них обычно
          прописываются более-менее подробно. Но при попытке самостоятельно
          составить смешанный договор, без помощи квалифицированного юриста,
          часто пренебрегают важными элементами.
        </p>
        <p className='font-bold'>
          2. Ошибки, допускаемые при составлении смешанного договора.
        </p>
        <p>
          Например, в части поставки условия договора могут быть проработаны
          нормально, а вот в части монтажа иногда не прописываются необходимые
          детали. Что касается пуско-наладки, здесь иногда ограничиваются одной
          строчкой, указывая, что она должна быть выполнена, но не
          конкретизируют, что в нее входит, в какие сроки она должна быть
          выполнена и как принимается результат заказчиком. Это приводит к
          неготовности к спорам с заказчиком.
        </p>
        <p>
          Следовательно, при составлении договора с несколькими предметами
          каждая его часть должна быть расписана так же подробно, как отдельный
          договор. Все части договора должны быть логично и непротиворечиво
          увязаны между собой. Предмет каждого "договора внутри договора" должен
          быть конкретизирован. В противном случае договор в какой-то его части
          может быть признан незаключенным.
        </p>
        <p>
          Допустим, в смешанном договоре по оборудованию все ясно, а по монтажу
          написано просто "монтаж оборудования" без описания и перечня работ,
          без отдельной сметы. В таком случае неясно, что подрядчик обязался
          делать для заказчика. Естественно, такой смешанный договор в части
          монтажа суд признает незаключенным договором.
        </p>
        <p>
          Таким образом, во избежание спорных ситуаций и правовых рисков важно
          уделять внимание детализации и конкретизации условий в смешанных
          договорах. Это позволит защитить интересы всех сторон и обеспечить
          успешное выполнение обязательств по договору.
        </p>
        <p className='font-bold'>
          3. Как защитить свои интересы при заключении смешанного договора.
        </p>
        <p>
          Ведение бизнеса с использованием смешанных договоров требует особого
          внимания к деталям. Еще одна важная проблема при заключении смешанных
          договоров заключается в различных ожиданиях сторон. Заказчик, как
          правило, предполагает, что заинтересован в выполнении всех условий
          смешанного договора в комплексе. Он уверен, что, если поставка
          выполнена должным образом, а монтаж выполнен некачественно, он сможет
          отказаться и от уже исполненной поставки, возвратив уплаченные
          средства. Подрядчик же считает, что за выполненную поставку должны
          заплатить, независимо от качества последующего монтажа или
          пуско-наладочных работ.
        </p>
        <p>
          Этот вопрос обязательно следует урегулировать в смешанном договоре.
          Если придерживаемся позиции заказчика, нужно сделать оговорку, что
          заказчик заинтересован в получении конечного результата, включающего
          все элементы. Если же мы на стороне подрядчика, важно проследить,
          чтобы таких оговорок в тексте не было. Напротив, необходимо прямо
          указать, что договор является смешанным, содержащим положения разных
          видов договоров, и включить следующую формулировку:
        </p>
        <p className='uppercase font-bold text-red-500'>
          ОБРАТИТЕ ВНИМАНИЕ!!! НИЖЕ МАКСИМАЛЬНО ПОЛЕЗНАЯ ИНФОРМАЦИЯ!
        </p>
        <p>
          «В части поставки договор считается исполненным поставщиком с момента
          приемки покупателем оборудования. В случае последующего отказа
          покупателя от исполнения настоящего договора в ходе производства работ
          или оказания услуг, в части произведенной поставки договор считается
          исполненным поставщиком надлежащим образом, уплаченные за товар
          денежные средства не подлежат возврату покупателю, а принятый
          покупателем товар не подлежит возврату поставщику».
        </p>

        <p>
          Такая формулировка застрахует подрядчика от ситуации, когда заказчик,
          ссылаясь на необходимость комплексного результата, требует возврата
          качественного оборудования и уплаченных за него средств при досрочном
          расторжении смешанного договора.
        </p>

        <p>
          Также важно помнить, что по договору поставки покупатель (заказчик) не
          имеет права отказаться от договора без причины, тогда как по договору
          подряда он по закону может это сделать в любой момент и без
          объяснений. Поэтому по смешанному договору может возникнуть ситуация,
          когда товар принят, а затем заказчик отказывается от исполнения
          договора, ссылаясь на нормы подряда (ст. 717 ГК РФ). Это может
          привести к конфликту и вопросу о том, отменяется ли ранее исполненная
          поставка.
        </p>

        <p>
          Во избежание таких ситуаций необходимо тщательно прописывать условия
          смешанного договора, учитывая все возможные сценарии развития событий.
          Важно понимать, что каждая часть смешанного договора требует
          детального подхода, чтобы защитить интересы сторон и обеспечить
          выполнение всех обязательств.
        </p>

        <p className='font-bold'>4. Определение цены в смешанном договоре</p>

        <p>
          Одной из распространенных проблем при заключении смешанных договоров
          является определение цены. Мы всегда настаиваем на дифференциации
          стоимости, разбивая ее на отдельные элементы: сколько стоит поставка,
          монтаж и пуско-наладка. Часто в договорах указывают общую сумму, не
          разделяя стоимость оборудования и работ. Особенно часто объединяют
          стоимость монтажных и пуско-наладочных работ, хотя монтаж обычно
          значительно дороже.
        </p>

        <p>
          В чем же риск отсутствия разбивки стоимости? Представьте ситуацию: вы
          поставили оборудование и качественно выполнили монтаж, но
          пуско-наладка оказалась неудачной. В итоге договор расторгается, и
          заказчик должен оплатить выполненные работы. Если в договоре указана
          только общая цена, невозможно определить, сколько именно он должен за
          поставку и монтаж без пуско-наладки. В такой ситуации приходится
          обращаться к экспертизе для определения стоимости отдельных частей
          договора. Это может затянуть процесс и привести к судебным
          разбирательствам. Этого можно было бы избежать, если бы в договоре
          была четко прописана стоимость каждого элемента.
        </p>

        <p className='font-bold'>
          5. Проблемы с гарантией в смешанном договоре
        </p>

        <p>
          Еще одна частая проблема касается гарантийного срока. В смешанном
          договоре необходимо прописывать гарантийные обязательства как по
          оборудованию, так и по результату выполненных работ. Нередко гарантия
          распространяется только на товар, а про гарантию качества монтажа
          забывают. В итоге гарантийного срока на результат монтажа нет, что
          может привести к претензиям, если проблемы возникли не с
          оборудованием, а с его установкой.
        </p>

        <p className='font-bold'>РЕЗЮМЕ</p>

        <p>
          Как видно, даже с договором с одним предметом не всегда просто
          разобраться, а смешанный договор в три раза сложнее. Если вы
          столкнулись с необходимостью подписать смешанный договор и хотите
          понимать свои риски, то вы все делаете правильно. Дело за малым, ваш
          договор должен посмотреть юрист. Стоит это, по сравнению с ценой
          договора, совсем недорого. Мы можем не только прописать ваши риски, но
          и согласовать договор с контрагентом или подготовить к нему протокол
          разногласий, составленный в ваших интересах. Это позволит избежать
          множества проблем и защитить ваши интересы в будущем. Пишите, ссылка
          на рабочие мессенджеры прямо под текстом.
        </p>

        <div className='flex space-x-5'>
          <ButtonTelegram />
          <ButtonWhatsUp />
        </div>
      </div>
    </div>
  )
}

export default page
