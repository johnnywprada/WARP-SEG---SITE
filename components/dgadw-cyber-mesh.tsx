
export function DgadwCyberMesh() {
  return (
    <div className="dgadw-cyber-mesh" aria-hidden="true">
      <svg
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="dgadwPulseGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#FF4500" />
            <stop offset="50%" stopColor="#FFB900" />
            <stop offset="100%" stopColor="#FF7900" />
          </linearGradient>

          <filter id="dgadwGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* CIRCUITOS SUPERIORES ESQUERDOS */}
        <g>
          <path className="dgadw-circuit-line"
            d="M65 0 V95 L35 125 V260 H125 V325 H220" />
          <path className="dgadw-circuit-line"
            d="M145 0 V65 L185 105 V175 H265 V245" />
          <path className="dgadw-circuit-line"
            d="M245 0 V45 L210 80 V145 H320 V205 H390" />
          <path className="dgadw-circuit-silver"
            d="M25 0 V75 L5 95 V195 H75 V255" />
          <path className="dgadw-circuit-silver"
            d="M195 0 V45 L235 85 V130 H295" />
          <path className="dgadw-circuit-gold"
            d="M0 365 H75 V420 H145 V475 H230" />

          <path className="dgadw-circuit-pulse"
            d="M65 0 V95 L35 125 V260 H125 V325 H220" />
          <path className="dgadw-circuit-pulse delay-1"
            d="M145 0 V65 L185 105 V175 H265 V245" />
        </g>

        {/* CIRCUITOS SUPERIORES DIREITOS */}
        <g>
          <path className="dgadw-circuit-line"
            d="M1375 0 V90 L1405 120 V245 H1315 V310 H1220" />
          <path className="dgadw-circuit-line"
            d="M1295 0 V65 L1255 105 V175 H1175 V245" />
          <path className="dgadw-circuit-silver"
            d="M1415 0 V75 L1435 95 V195 H1365 V255" />
          <path className="dgadw-circuit-gold"
            d="M1440 360 H1365 V415 H1295 V470 H1210" />

          <path className="dgadw-circuit-pulse delay-2"
            d="M1375 0 V90 L1405 120 V245 H1315 V310 H1220" />
        </g>

        {/* CIRCUITOS INFERIORES ESQUERDOS */}
        <g>
          <path className="dgadw-circuit-line"
            d="M0 700 H85 V760 H165 V825 H255 V900 H345 V1000" />
          <path className="dgadw-circuit-line"
            d="M0 835 H55 V885 H135 V945 H225 V1000" />
          <path className="dgadw-circuit-silver"
            d="M0 610 H45 V665 H115 V725 H195" />
          <path className="dgadw-circuit-gold"
            d="M0 940 H95 V975 H175 V1000" />

          <path className="dgadw-circuit-pulse delay-3"
            d="M0 700 H85 V760 H165 V825 H255 V900 H345 V1000" />
        </g>

        {/* CIRCUITOS INFERIORES DIREITOS */}
        <g>
          <path className="dgadw-circuit-line"
            d="M1440 700 H1355 V760 H1275 V825 H1185 V900 H1095 V1000" />
          <path className="dgadw-circuit-line"
            d="M1440 835 H1385 V885 H1305 V945 H1215 V1000" />
          <path className="dgadw-circuit-silver"
            d="M1440 610 H1395 V665 H1325 V725 H1245" />
          <path className="dgadw-circuit-gold"
            d="M1440 940 H1345 V975 H1265 V1000" />

          <path className="dgadw-circuit-pulse delay-1"
            d="M1440 700 H1355 V760 H1275 V825 H1185 V900 H1095 V1000" />
        </g>

        {/* PONTOS DE CONEXÃO */}
        <g>
          <circle className="dgadw-circuit-node" cx="65" cy="95" r="5" />
          <circle className="dgadw-circuit-node" cx="125" cy="325" r="5" />
          <circle className="dgadw-circuit-node" cx="265" cy="245" r="5" />
          <circle className="dgadw-circuit-node-gold" cx="35" cy="260" r="4" />

          <circle className="dgadw-circuit-node" cx="1375" cy="90" r="5" />
          <circle className="dgadw-circuit-node" cx="1315" cy="310" r="5" />
          <circle className="dgadw-circuit-node-gold" cx="1405" cy="245" r="4" />

          <circle className="dgadw-circuit-node" cx="85" cy="700" r="5" />
          <circle className="dgadw-circuit-node" cx="255" cy="900" r="5" />
          <circle className="dgadw-circuit-node-gold" cx="165" cy="825" r="4" />

          <circle className="dgadw-circuit-node" cx="1355" cy="760" r="5" />
          <circle className="dgadw-circuit-node" cx="1185" cy="900" r="5" />
          <circle className="dgadw-circuit-node-gold" cx="1275" cy="825" r="4" />
        </g>
      </svg>
    </div>
  );
}
