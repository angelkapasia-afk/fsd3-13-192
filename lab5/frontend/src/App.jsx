

function You(prop) {
  return (
    <>
      <h1>{prop.name}</h1>
      <h2>{prop.email}</h2>
    
    </>
  );
}

const Friend = (prop) => {
  return (
    <>
      <h1>{prop.name}</h1>
      <h2>{prop.email}</h2>
      <h3>{prop.age}</h3>
    </>
  );
};

export default function App() {
  const myself = {
    name: "ANGEL",
    email: "angel@gmail.com",
  };
  const f1 = {
    name: "anshika",
    email: "anshika@gmail.com",
    age: "12",
  };
  const f2 = {
    name: "ananya",
    email: "ananya@gmail.com",
    age: "20",
  };
  const f3 = {
    name: "janvi",
    email: "janvi@gmail.com",
    age: " 32",
  };
  const friends = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      age: 21,
    },
    {
      name: "Priya Patel",
      email: "priya.patel@example.com",
      age: 20,
    },
    {
      name: "Rohan Gupta",
      email: "rohan.gupta@example.com",
      age: 22,
    },
    {
      name: "Ananya Singh",
      email: "ananya.singh@example.com",
      age: 19,
    },
    {
      name: "Kabir Verma",
      email: "kabir.verma@example.com",
      age: 23,
    },
    {
      name: "Neha Reddy",
      email: "neha.reddy@example.com",
      age: 21,
    },
    {
      name: "Aditya Rao",
      email: "aditya.rao@example.com",
      age: 24,
    },
    {
      name: "Simran Kaur",
      email: "simran.kaur@example.com",
      age: 20,
    },
    {
      name: "Vikram Joshi",
      email: "vikram.joshi@example.com",
      age: 22,
    },
    {
      name: "Ananya Iyer",
      email: "ananya.iyer@example.com",
      age: 21,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8 space-y-8">
        {/* Personal Section */}
        <section className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            MY SELF
          </h1>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <You {...myself} />
          </div>
        </section>

        {/* Friends Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            MY FRIENDS ARE:
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
              <Friend {...f1} />
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
              <Friend {...f2} />
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
              <Friend {...f3} />
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
              <Friend {...friends[0]} />
            </div>
          </div>

          {/* Mapped Friends */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
              All Friends List
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {friends.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-indigo-50/50 rounded-lg border border-indigo-100 shadow-sm"
                >
                  <Friend {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}