import ButtonTelegram from '@/components/buttons/ButtonTelegram'
import ButtonWhatsUp from '@/components/buttons/ButtonWhatsUp'
import Link from 'next/link'

const page = () => {
  return (
    <div className='container flex items-center justify-center min-h-screen'>
      <div className='grid1 py-10 not-copy'>
        <p className='font-bold'>Подрядчик бросил объект</p>
        <p>
          Здравствуй, дорогой читатель! Я рад приветствовать тебя на нашем
          сайте. В разделе «статьи» мы с командой освещаем правовые вопросы,
          которые регулярно возникают у наших клиентов, занимающихся бизнесом.
          Если вам лень читать, то знайте, что практически по каждой из статей у
          нас есть ролик на ютуб канале. Ниже есть кнопка, если удобнее
          смотреть, то переходите туда. Тема сегодняшней статьи посвящена
          недобросовестным подрядчикам и ситуации, когда подрядчик не выполнил
          работы и покинул объект. Если у вас есть вопрос по данной теме, не
          стесняйтесь написать в мессенджер. Ссылку на него найдете сразу после
          статьи.
        </p>
        <p className='font-bold'>1. Описание проблемы.</p>
        <p>
          Друзья, мы все привыкли к определенному алгоритму исполнения договора
          подряда. Заключается договор, заказчик передает подрядчику
          строительную площадку, подрядчик завозит на нее оборудование и
          работников, выполняет работы, направляет заказчику акты выполненных
          работ, убирает за собой и возвращает строительную площадку, заказчик
          оплачивает работы, выполненные подрядчиком.
        </p>
        <p>
          Но случаются сбои в этом алгоритме. Приходится сталкиваться с
          ситуациями, когда подрядчик, обычно после более-менее длительного и
          серьезного конфликта, не выполнив работы, просто оставляет
          строительную площадку и перестает выходить на связь. Работников
          подрядчика на площадке нет, работы стоят, сроки идут. Довольно
          неумный, на самом деле, шаг, потому что пока площадка не передана
          заказчику обратно, за происходящее на ней отвечает подрядчик, и
          «спрятаться в домике» здесь не получится. Проблема таким поведением
          никак не решается. Но мы исходим из того, что подрядчик выбрал такую
          тактику, которая, надо сказать, ставит некоторых заказчиков в тупик.
        </p>
        <p className='font-bold'>2. Как заказчику делать не стоит?</p>
        <p>
          Главное, что не стоит делать сразу заказчику, — это выполнять работы
          за подрядчика: выводить на объект другого подрядчика или продолжать
          выполнять работы своими силами. Потому что ваш договор со старым
          подрядчиком еще действует. И в дальнейшем он сможет заявить, что
          работы сделаны не кем-то еще, а им самим, и потребовать оплаты всех
          выполненных объемов работ. Договор-то есть, он не был расторгнут. Как
          минимум, возникнет неприятная необходимость выяснять, путем
          исследования документов и через экспертизу, кто именно и какие работы
          делал, то есть устанавливать фактически выполненные подрядчиком
          работы. А с документами ведь может быть и не все в порядке.
        </p>
        <p className='font-bold'>3. Верные действия заказчика.</p>
        <p>
          Итак, до того, как мы разберемся со старым, недобросовестным,
          подрядчиком, мы ничего на площадке не делаем и никого нового не
          подключаем. Вместо этого мы должны:
        </p>
        <p>
          а) зафиксировать факт отсутствия подрядчика на площадке, несколько
          раз;
        </p>
        <p>
          б) направить претензию подрядчику, в которой указать, что он
          отсутствует на объекте, работы не выполняются, пригрозить отказом от
          исполнения договора;
        </p>
        <p>
          в) выждав немного времени, направить подрядчику извещение об отказе от
          исполнения договора подряда, со ссылкой на ст. 715 ГК РФ, которая
          устанавливает право заказчика отказаться от исполнения договора, если
          подрядчик выполняет работу настолько медленно, что окончание ее к
          сроку становится явно невозможным.
        </p>

        <p>
          Безусловно, это общая схема, нужно также обращаться к договору, в
          котором могут быть прописаны период просрочки, при котором можно
          отказаться от договора, и порядок такого отказа. Если на момент ухода
          с объекта подрядчик и так давно находился за сроками, достаточно
          просто направить извещение об отказе от исполнения договора. Важно,
          чтобы направлено оно было в правильный адрес, с сохранением
          доказательств направления.
        </p>

        <p>
          С момента прекращения действия договора (по общему правилу, это момент
          получения подрядчиком вашего извещения, но в договоре может быть
          прописано и иное) подрядчик уже не вправе производить на объекте
          какие-то работы, что позволяет вам двигаться дальше.
        </p>

        <p>
          Следующим этапом нужно зафиксировать то, что подрядчик успел сделать
          по договору до своего бегства, но не сдал вам, то есть фактически
          выполненные работы.
        </p>

        <p>
          Да и в целом состояние объекта после подрядчика. Для этого вам нужно
          выбрать дату, когда будет производиться фиксация, направить в адрес
          подрядчика уведомление о том, что она будет происходить, с
          предложением ему обеспечить явку уполномоченного лица для участия.
          Опять же, сверяемся с договором, там могут содержаться отдельные
          положения на данный счет (бывают очень подробные договоры на десятки
          страниц). Мы рекомендуем привлекать к проведению фиксации независимого
          эксперта или хотя бы независимого специалиста. В этом случае в вашем
          письме-вызове подрядчику следует предупредить подрядчика, что фиксация
          будет производиться с участием такого-то эксперта (специалиста).{' '}
        </p>

        <p>
          Возможно совместить извещение об отказе от договора и письмо о вызове
          подрядчика для осмотра и фиксации работ, фактически выполненных
          подрядчиком по договору, в одном документе. Если это не получается,
          например, требуется некоторое время, чтобы найти эксперта, можно
          сделать два разных документа.
        </p>

        <p>
          После ждем назначенную нами дату и проводим осмотр и фиксацию
          результата работ на объекте, оформляя это актом. Если подрядчик не
          явился (а так чаще всего и бывает), в акте указываем, что он был
          извещен тогда-то таким-то письмом, не явился. В акте излагаем то, что
          установили при оценке. Если участвует эксперт или специалист, в акте
          тоже нужно это указать. Максимально подробно описываем состояние
          объекта и имеющийся результат работ, подписываем акт со своей стороны.
          Неплохо бы произвести и фото- или видеофиксацию производимого осмотра.
        </p>

        <p>
          При привлечении эксперта или специалиста они подготовят также свое
          заключение, которое будет подтверждать данный акт. Экземпляр акта
          направляем подрядчику. После составления акта уже будет понятен
          фактически выполненный подрядчиком объем работ, а также кто и сколько
          должен по расторгнутому договору подряда. Например, если по договору
          был выплачен миллион авансом, а при определении фактически
          выполненного объема работ выяснилось, что сделано качественных работ
          на 100 тысяч рублей, очевидно, что подрядчик обязан возвратить
          заказчику 900 000 неотработанного аванса. Вот и составляем претензию
          об этом в адрес подрядчика. Помимо основного долга, также требуем
          уплатить пени и штрафы, которые можно предъявить ему по договору.
        </p>

        <p>
          Только после этого можно, обложившись перечисленными документами,
          можно приступать к продолжению работ на объекте.
        </p>

        <p className='font-bold'>
          4. Привлечение нового подрядчика. На что обратить внимание.
        </p>
        <p>
          При заключении договора с новым подрядчиком мы советуем прописать в
          этом договоре в том числе то, что данный договор заключается в связи с
          необходимостью выполнения работ после расторжения договора с
          предыдущим подрядчиком, а при передаче новому подрядчику фронта работ
          описать состояние объекта на момент захода нового подрядчика, это
          описание должно соответствовать тому, что было установлено актом
          фиксации выполненных работ.
        </p>

        <p>
          Составляя для нового подрядчика перечни работ, смету, старайтесь
          делать так, чтобы легко можно было понять, что было сделано старым
          подрядчиком, а какие работы будут выполнены другим новым подрядчиком,
          то есть чтобы не происходило пересечение и наложение работ. Потому что
          при споре в дальнейшем нужно будет разбираться, что именно выполнил
          конкретный подрядчик. Если в связи с привлечением нового подрядчика вы
          понесете убытки, например, ему придется заплатить больше, чем за те же
          работы причиталось ушедшему с объекта подрядчику, эти убытки вы
          сможете предъявить старому подрядчику отдельной претензией.
        </p>

        <p className='font-bold'>5. Старый подрядчик прислал акты.</p>

        <p>
          Бывает так, что через некоторое время после расторжения вами договора
          с подрядчиком-беглецом от него вдруг почтой приходят акты выполненных
          работ. Наверняка объемы в таких актах будут завышенными,
          исполнительная документация к ним будет отсутствовать. Важно не
          игнорировать данные акты, а оперативно направить мотивированный отказ
          от приемки работ, описав предыдущие обстоятельства и сославшись на
          документы, которые у вас уже есть.
        </p>

        <p className='font-bold'>В заключение.</p>
        <p>
          Еще раз подчеркиваем, что в рассматриваемой нами ситуацией большое
          значение имеет быстрая и качественная подготовка нужных документов
          (извещений, претензий) и наличие доказательств направления подрядчику
          каждого из таких документов. Так, если противостояние с подрядчиком
          переместится в суд (например, подрядчик требует оплаты фактически
          выполненных работ или отказывается возвращать неотработанный аванс),
          там, скорее всего, будет поставлен вопрос о судебной экспертизе объема
          и стоимости фактически выполненных таким подрядчиком работ. А ведь
          работы на объекте завершит уже другой подрядчик (или заказчик выполнит
          работы за подрядчика собственными силами). И, осмотрев объект, эксперт
          сможет только констатировать, что все работы на нем выполнены. Поэтому
          основным вопросом будет, кем они выполнены и в какой части. Если у вас
          будут нужные документы – извещение об отказе, приглашение подрядчика
          на фиксацию, акт фиксации результата работ, заключение специалиста и
          т. д. – эксперту будет, с чем работать, и он сможет дать ответ,
          подтверждающий вашу позицию.
        </p>
        <p>
          А чтобы такие документы у вас точно имелись и были нужного качества,
          обращайтесь к специализирующемся на подряде юристам,
          <span className='bg-yellow-300'> например, к нам</span>, как можно
          раньше, еще на первой стадии конфликта с подрядчиком. В таком случае,
          может быть и до ухода подрядчика с объекта не дойдет.{' '}
          <span className='bg-yellow-300'>
            Написать нам можно в рабочие мессенджеры, ссылка на которые прямо
            под этим текстом.
          </span>
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
