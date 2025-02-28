export const calculateOrbitalPeriod = (semiMajorAxis, gravitationalParameter) => {
    return 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / gravitationalParameter);
};

export const calculateEscapeVelocity = (mass, radius) => {
    const G = 6.67430e-11; // Gravitational constant
    return Math.sqrt((2 * G * mass) / radius);
};

export const calculateDistance = (pos1, pos2) => {
    const dx = pos2.x - pos1.x;
    const dy = pos2.y - pos1.y;
    const dz = pos2.z - pos1.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
};