"use client"; // se for usar estado ou efeitos (ex: carrossel)

import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              {/* Aspas decorativas */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Conteúdo */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                “{item.content}”
              </p>

              {/* Avaliação com estrelas */}
              {item.rating && (
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating!
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Avatar e nome */}
              <div className="flex items-center gap-3">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}