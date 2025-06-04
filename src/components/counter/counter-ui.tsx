// import { PublicKey } from '@solana/web3.js'
// import { useCounterProgram, useCounterProgramAccount } from './counter-data-access'
// import { useState } from 'react'
// import { useWallet } from '@solana/wallet-adapter-react'

// export function CounterCreate() {
//   const [title, setTitle] = useState('')
//   const [message, setMessage] = useState('')
//   const { createEntry } = useCounterProgram();
//   const { publicKey } = useWallet();

//   const isFormValid = title.trim() !== '' && message.trim() !== '';

//   const handleSubmit = () => {
//     if (publicKey && isFormValid) {
//       createEntry.mutateAsync({ title, message, owner: publicKey });
//       setTitle('');
//       setMessage('');
//     }
//   }

//   if (!publicKey) {
//     return <p>Connect to wallet</p>;
//   };

//   return (
//     <div>
//       <input type='text'
//         placeholder='Title'
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className='input input-bordered w-full max-w-xs'
//       />

//       <textarea
//         placeholder='Message'
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className='textarea textarea-bordered w-full max-w-xs'
//       />

//       <button
//         onClick={handleSubmit}
//         disabled={createEntry.isPending || !isFormValid}
//         className='btn btn-xs lg:btn-md btn-primary'
//       >
//         Create Journal Entry
//       </button>

//     </div>
//   )
// }

// export function CounterList() {
//   const { accounts, getProgramAccount } = useCounterProgram()

//   if (getProgramAccount.isLoading) {
//     return <span className="loading loading-spinner loading-lg"></span>
//   }
//   if (!getProgramAccount.data?.value) {
//     return (
//       <div className="alert alert-info flex justify-center">
//         <span>Program account not found. Make sure you have deployed the program and are on the correct cluster.</span>
//       </div>
//     )
//   }
//   return (
//     <div className={'space-y-6'}>
//       {accounts.isLoading ? (
//         <span className="loading loading-spinner loading-lg"></span>
//       ) : accounts.data?.length ? (
//         <div className="grid md:grid-cols-2 gap-4">
//           {accounts.data?.map((account) => (
//             <CounterCard key={account.publicKey.toString()} account={account.publicKey} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center">
//           <h2 className={'text-2xl'}>No accounts</h2>
//           No accounts found. Create one above to get started.
//         </div>
//       )}
//     </div>
//   )
// }

// function CounterCard({ account }: { account: PublicKey }) {
//   const { accountQuery, updateEntry, deleteEntry
//   } = useCounterProgramAccount({ account });

//   const { publicKey } = useWallet();
//   const [message, setMessage] = useState('');
//   const title = accountQuery.data?.title;
//   const isFormValid = message.trim() !== "";

//   const handleSubmit = () => {
//     if (publicKey && isFormValid && title) {
//       updateEntry.mutateAsync({ title, message, owner: publicKey });
//     }
//   }

//   if (!publicKey) {
//     1
//     return <p>Connect to wallet</p>;
//   };

//   return accountQuery.isLoading ? (
//     <span className="loading loading-spinner loading-lg"></span>
//   ) : (
//     <div className='card card-bordered border-base-300 border-4 text-neutral-content'>
//       <div className='card-body items-center text-center'>
//         <div className='space-y-6'>
//           <h2 className='card-title justify-center text-3xl cursor-pointer'
//             onClick={() => accountQuery.refetch()}
//           >{accountQuery.data?.title}</h2>
//           <p>{accountQuery.data?.message}</p>
//           <div className='card-actions justify-around '>
//             <textarea
//               placeholder='Update message'
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className='textarea textarea-bordered w-full max-w-xs'
//             >

//             </textarea>
//             <button
//               onClick={handleSubmit}
//               disabled={updateEntry.isPending || !isFormValid}
//               className='btn btn-xs lg:btn-md btn-primary'
//             >
//               update journal entry
//             </button>
//             <button
//               onClick={() => {
//                 const title = accountQuery.data?.title;
//                 if (title)
//                   return deleteEntry.mutateAsync(title);
//               }
//               }
//               disabled={deleteEntry.isPending}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }


import { PublicKey } from '@solana/web3.js'
import { useCounterProgram, useCounterProgramAccount } from './counter-data-access'
import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

export function CounterCreate() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const { createEntry } = useCounterProgram();
  const { publicKey } = useWallet();

  const isFormValid = title.trim() !== '' && message.trim() !== '';

  const handleSubmit = () => {
    if (publicKey && isFormValid) {
      createEntry.mutateAsync({ title, message, owner: publicKey });
      setTitle('');
      setMessage('');
    }
  }

  if (!publicKey) {
    return <p className="text-center text-base-content">Connect to wallet</p>;
  }

  return (
    <div className="p-6 rounded-xl border border-base-300 shadow-lg bg-base-100 transition-all duration-500 space-y-4 animate-fade-in">
      <input
        type='text'
        placeholder='Enter title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='input input-bordered w-full max-w-md placeholder:text-base-content text-base-content bg-base-200'
      />
      <textarea
        placeholder='Write your message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='textarea textarea-bordered w-full max-w-md placeholder:text-base-content text-base-content bg-base-200'
      />
      <button
        onClick={handleSubmit}
        disabled={createEntry.isPending || !isFormValid}
        className='btn btn-primary w-full max-w-md transition-transform hover:scale-105'
      >
        Create Journal Entry
      </button>
    </div>
  )
}

export function CounterList() {
  const { accounts, getProgramAccount } = useCounterProgram()

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg text-base-content"></span>
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info justify-center text-base-content">
        <span>Program account not found. Make sure you have deployed the program and are on the correct cluster.</span>
      </div>
    )
  }

  return (
    <div className={'space-y-6 p-6'}>
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg text-base-content"></span>
      ) : accounts.data?.length ? (
        <div className="grid md:grid-cols-2 gap-6">
          {accounts.data?.map((account) => (
            <CounterCard key={account.publicKey.toString()} account={account.publicKey} />
          ))}
        </div>
      ) : (
        <div className="text-center text-base-content">
          <h2 className={'text-2xl font-semibold'}>No accounts</h2>
          <p>No accounts found. Create one above to get started.</p>
        </div>
      )}
    </div>
  )
}

function CounterCard({ account }: { account: PublicKey }) {
  const { accountQuery, updateEntry, deleteEntry } = useCounterProgramAccount({ account });

  const { publicKey } = useWallet();
  const [message, setMessage] = useState('');
  const title = accountQuery.data?.title;
  const isFormValid = message.trim() !== "";

  const handleSubmit = () => {
    if (publicKey && isFormValid && title) {
      updateEntry.mutateAsync({ title, message, owner: publicKey });
      setMessage('');
    }
  }

  if (!publicKey) {
    return <p className="text-base-content text-center">Connect to wallet</p>;
  }

  return accountQuery.isLoading ? (
    <span className="loading loading-spinner loading-lg text-base-content"></span>
  ) : (
    <div className='card card-bordered border-base-300 shadow-md bg-base-100 text-base-content transition-all duration-500 hover:shadow-xl animate-fade-in'>
      <div className='card-body items-center text-center space-y-4'>
        <h2
          className='card-title text-2xl cursor-pointer transition-transform hover:scale-105'
          onClick={() => accountQuery.refetch()}
        >
          {accountQuery.data?.title}
        </h2>
        <p className='text-base'>{accountQuery.data?.message}</p>
        <textarea
          placeholder='Update message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='textarea textarea-bordered w-full max-w-md placeholder:text-base-content text-base-content bg-base-200'
        />
        <div className='flex gap-4 justify-center flex-wrap'>
          <button
            onClick={handleSubmit}
            disabled={updateEntry.isPending || !isFormValid}
            className='btn btn-primary transition-transform hover:scale-105'
          >
            Update Journal
          </button>
          <button
            onClick={() => {
              const title = accountQuery.data?.title;
              if (title) deleteEntry.mutateAsync(title);
            }}
            disabled={deleteEntry.isPending}
            className='btn btn-error transition-transform hover:scale-105'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
