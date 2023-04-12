export default function EditCards() {
  return (
    <div>
      {/* <div>
        <div>Edit notecards</div>
        <div>
          <div>
            {cards.map((card) => (
              <EditCard
                key={card.question}
                question={card.question}
                answer={card.answer}
              />
            ))}
            <EditCard question="" answer="" />
          </div>
        </div>
      </div> */}
    </div>
  );
}



function EditCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <input value={question} placeholder="Question" />
      <input value={answer} placeholder="Answer" />
      <input type="submit" />
      <button>Delete</button>
    </div>
  );
}