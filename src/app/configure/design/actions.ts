"use server"

import { db } from "@/db";
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from '@prisma/client';

export type SaveConfigArgs = {
    color: CaseColor
    finish: CaseFinish
    material: CaseMaterial
    model: PhoneModel
    configId: string
}

export async function saveConfigurationToDb({
    color,
    finish,
    material,
    model,
    configId,
 }: SaveConfigArgs) {
    await db.configuration.update({
        where: { id: configId },
        data: {color, finish, material, model}
    })
}