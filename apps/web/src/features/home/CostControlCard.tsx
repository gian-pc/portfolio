"use client";

import { useEffect, useMemo, useState } from "react";

type CostService = { name: string; amount: number };
type CostPayload = {
  currency: string;
  updatedAt: string;
  monthToDate: number;
  forecast: number;
  costExplorerApi?: number;
  services: CostService[];
};

const FALLBACK_SERVICES: CostService[] = [
  { name: "Lambda", amount: 0 },
  { name: "CloudFront", amount: 0 },
  { name: "S3", amount: 0 },
];

function toNumber(v: unknown) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function serviceKey(name: string) {
  const n = name.toLowerCase();
  if (n.includes("lambda")) return "lambda";
  if (n.includes("cloudfront")) return "cloudfront";
  if (n.includes("storage") || n === "s3" || n.includes("simple storage")) return "s3";
  return "lambda";
}

function serviceLabel(name: string) {
  const key = serviceKey(name);
  if (key === "lambda") return "Lambda";
  if (key === "cloudfront") return "CloudFront";
  if (key === "s3") return "S3";
  return name;
}

function serviceIcon(name: string) {
  const k = serviceKey(name);
  if (k === "lambda") return "λ";
  if (k === "cloudfront") return "☁";
  return "▣";
}

function formatKpiAmount(value: number) {
  if (value > 0 && value < 0.01) return "< 0.01";
  return value.toFixed(2);
}

export function CostControlCard() {
  const [data, setData] = useState<CostPayload | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/aws/costs/latest.json", { cache: "no-store" });
        if (!res.ok) return;
        const json = (await res.json()) as CostPayload;
        if (!cancelled) setData(json);
      } catch {
        // keep fallback UI
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const services = useMemo(() => {
    const raw = data?.services?.length ? data.services : FALLBACK_SERVICES;
    return raw.map((s) => ({ name: serviceLabel(s.name), amount: toNumber(s.amount) }));
  }, [data]);

  const maxAmount = Math.max(1, ...services.map((s) => s.amount));

  const updatedLabel = data?.updatedAt
    ? new Intl.DateTimeFormat("es-PE", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(data.updatedAt))
    : "sin datos";

  const currency = data?.currency || "USD";
  const monthToDate = toNumber(data?.monthToDate);
  const forecast = toNumber(data?.forecast);
  const ceApi = toNumber(data?.costExplorerApi);

  return (
    <article className="cost-card" aria-label="Control de costos AWS">
      <header className="cost-card-head">
        <div className="cost-card-title-wrap">
          <AwsLogo />
          <h3>Control de costos</h3>
        </div>
        <p className="cost-card-updated-inline">
          <span>Última actualización</span>
          <span>{updatedLabel}</span>
        </p>
      </header>

      <section className="cost-kpis" aria-label="Métricas principales">
        <div className="cost-kpi-card">
          <p>Acumulado</p>
          <strong>
            {currency} {formatKpiAmount(monthToDate)}
          </strong>
        </div>
        <div className="cost-kpi-card">
          <p>Proyección</p>
          <strong>
            {currency} {formatKpiAmount(forecast)}
          </strong>
        </div>
      </section>

      <section className="cost-services" aria-label="Top servicios">
        <div className="cost-services-head">
          <p>Top servicios</p>
          <span>Mayor impacto en costo</span>
        </div>

        {services.map((service) => {
          const key = serviceKey(service.name);
          const ratio = Math.max(8, (service.amount / maxAmount) * 100);

          return (
            <div key={service.name} className="cost-service-item">
              <div className="cost-service-row">
                <div className="cost-service-main">
                  <span className={`cost-service-icon cost-service-icon-${key}`}>{serviceIcon(service.name)}</span>
                  <span>{service.name}</span>
                </div>
                <span className="cost-service-amount">
                  {currency} {service.amount.toFixed(4)}
                </span>
              </div>
              <div className="cost-service-bar" aria-hidden="true">
                <span style={{ width: `${ratio}%` }} />
              </div>
            </div>
          );
        })}

        <div className="cost-service-extra">
          <span className="cost-service-extra-label">CE API</span>
          <span className="cost-service-extra-amount">
            {currency} {ceApi.toFixed(2)}
          </span>
        </div>
      </section>
    </article>
  );
}

function AwsLogo() {
  return (
    <svg className="cost-card-brand-logo" viewBox="0 0 56 22" aria-label="AWS logo" role="img">
      <text x="28" y="14" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
        aws
      </text>
      <path d="M14 17c5 3 23 3 28 0" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
