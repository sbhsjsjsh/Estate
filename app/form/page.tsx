'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Calendar, Mail, User, Briefcase, Phone, Lock, MessageSquare } from 'lucide-react';

interface FormSubmission {
  id: string;
  firstName: string;
  lastName: string;
  ask?: string;
  email: string;
  phone?: string;
  role: string;
  date: string;
}

export default function FormResponses() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    setSubmissions(saved);
    if (sessionStorage.getItem('formAuth') === 'true') {
      setIsAuthenticated(true);
    }
    setMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Islampur99') {
      setIsAuthenticated(true);
      sessionStorage.setItem('formAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-stone-900" />
              </div>
            </div>
            <h1 className="text-2xl font-serif font-bold text-stone-900 text-center mb-2">Restricted Access</h1>
            <p className="text-stone-500 text-center mb-8">Please enter the password to view form responses.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50"
                  autoFocus
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white font-bold py-3 rounded-lg hover:bg-stone-800 transition-colors"
              >
                Access Dashboard
              </button>
            </form>
          </div>
          <div className="bg-stone-50 px-8 py-4 border-t border-stone-100 flex justify-center">
            <Link href="/" className="text-sm text-stone-500 hover:text-stone-900 font-medium">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-stone-100 rounded-full transition-colors group">
              <ArrowLeft className="w-5 h-5 text-stone-500 group-hover:text-stone-900" />
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-stone-900" />
              <span className="text-xl font-serif font-bold text-stone-900 tracking-tight">EstateWeb<span className="text-amber-600">.</span></span>
            </div>
          </div>
          <div className="text-sm font-medium text-stone-500">
            Internal Dashboard
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Form Responses</h1>
            <p className="text-stone-500 mt-2">View all pricing and consultation requests.</p>
          </div>
          <div className="bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-stone-700">
            Total Leads: <span className="text-amber-600 font-bold ml-1">{submissions.length}</span>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden text-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50/80 border-b border-stone-200">
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-stone-400" /> Name
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-stone-400" /> Ask
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-stone-400" /> Email
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-stone-400" /> Phone
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-stone-400" /> Role
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-stone-900">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-stone-400" /> Date
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-stone-500">
                      No form responses yet. Submit the form on the landing page to see data here.
                    </td>
                  </tr>
                ) : (
                  submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-stone-900">{sub.firstName} {sub.lastName}</div>
                      </td>
                      <td className="px-6 py-4">
                        {sub.ask ? (
                          <div className="text-stone-600 max-w-xs truncate" title={sub.ask}>{sub.ask}</div>
                        ) : (
                          <span className="text-stone-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-stone-600">
                        <a href={`mailto:${sub.email}`} className="hover:text-amber-600 hover:underline">{sub.email}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-stone-600">
                        {sub.phone ? (
                          <a href={`tel:${sub.phone}`} className="hover:text-amber-600 hover:underline">{sub.phone}</a>
                        ) : (
                          <span className="text-stone-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
                          {sub.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-stone-500 text-xs">
                        {new Date(sub.date).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
